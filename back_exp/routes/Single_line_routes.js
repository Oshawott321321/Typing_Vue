import express from 'express'
import { Single_Line } from '../models/Single_lines.js'


const router = express.Router()

router.get('/',(req,res)=> {
    res.json({
        data:'this is the string to type'
    })
})

//protected
router.post('/create', (req,res) => {
    const { data } = req.body
    var t = new Single_Line({
        str:data
    })
    t.save()
    .then( obj => {
        res.json({
            msg: "Data Entered"
        })
    })
    .catch( err => {
        res.json({
            err
        })
    })

})

//implement random find 
router.get('/get/',(req,res) => {
    Single_Line.countDocuments()
    .then(count => {
        var random = Math.floor(Math.random() * count)
        Single_Line.findOne().skip(random)
        .then(s_res => {
            res.json({
                data:s_res
            })
        })
    })
})

export default router