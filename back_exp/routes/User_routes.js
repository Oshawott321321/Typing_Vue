import express from 'express'
import bcryptjs from 'bcryptjs'
import { User } from '../models/User.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import {check_access_token} from '../middleware/check_token.js'

dotenv.config()


const router = express.Router()

router.post('/login', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(404).json({ msg: 'Please Provide All Data' })
    }
    User.findOne({ email })
        .then(user => {
            const payload = {
                _id: user._id
            }

            //password compare
            bcryptjs.compare(password,user.password , (p_err , p_res ) => {
                if(p_err){
                    return res.json({
                        p_err
                    })
                }
                // password match
                if(p_res){
                    jwt.sign(payload, process.env.jwt_secret, { expiresIn: '10m' },
                        (err, token) => {
                            if (err) {
                                throw err
                            }
                            return res.json({
                                msg: 'Login Successful',
                                data: user,
                                token
                            })
                        })
                }
                // password or email is not correct
                else {
                    return res.status(404).json({
                        msg:'Password Or Email might be Incorrect',
                    })
                }
            })
        })
        //No Account 
        .catch(err => {
            res.status(404).json({
                msg:'No Account found for this details'
            })
        })


})

router.post('/register', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(404).json({ msg: 'Please Provide All Data' })
    }

    const temp_user = new User({
        email, password
    })

    bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(password, salt, (err, hash) => {
            if (err) {
                return res.status(404).json({ msg: 'Internal Server Error' })
            }

            temp_user.password = hash

            temp_user.save()
                .then(user => {
                    const payload = {
                        _id: user._id
                    }
                    jwt.sign(payload, process.env.jwt_secret, { expiresIn: '10m' },
                        (err, token) => {
                            if (err) {
                                throw err
                            }

                            res.json({
                                msg: 'Register Page',
                                data: user,
                                token
                            })
                        })
                })
                .catch(err => {
                    res.json({
                        err,
                        msg:'Email Already Exists'
                    })
                })
        })
    })
})


router.get('/userinfo', check_access_token , (req, res) => {
    const payload = req.payload

    User.findOne({_id:payload._id})
    .then( user => {
        User.find().exec(function (err, results) {
            var count = results.length
          
            
            return res.status(200).json({
                msg:"Profile Data",
                data:user,
                count
            })
        });
    })
    .catch( err => {
        return res.status(404).json({
            msg:'No account Found'
        })
    })
})

router.post('/updatebasicstats' ,check_access_token, (req, res) => {
    console.log('in stats')
    const { typing_speed , error_rate } = req.body
    const payload = req.payload
    console.log(payload,typing_speed,error_rate)
    User.findOne({_id:payload._id})
    .then( user => {
        user.typing_speed = typing_speed
        user.error_rate = error_rate
        user.save()
          .then(user => {
              res.status(200).json({
                  msg:"updated",
                  data: user
              })
          })
    })
    .catch( err => {
        res.status(404).json({
            msg: 'Not Found'
        })
    })

})
export default router