import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

const check_access_token = (req,res, next) => {
    const temp = req.header('Authorization')
    const token = temp.split(' ')[1]
    if(!token) {
        return res.status(401).json({
            msg:"No token , UnAuthorized Access"
        })
    }
    console.log(token)
    jwt.verify( token , process.env.jwt_secret , (err , payload ) => {
        if(err){
            return res.status(401).json({
                msg:"Invalid token , UnAuthorized Access"
            })
        }
        req.payload = payload
        console.log(payload)
        next()
    })

}

export { check_access_token }