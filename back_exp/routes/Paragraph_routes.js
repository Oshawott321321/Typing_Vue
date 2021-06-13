import express from 'express'
import { Paragraph } from '../models/paragraphs.js'

const router = express.Router()


//protected
router.post('/create', (req,res) => {
    const { data } = req.body
    var t = new Paragraph({
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
    Paragraph.countDocuments()
    .then(count => {
        var random = Math.floor(Math.random() * count)
        Paragraph.findOne().skip(random)
        .then(s_res => {
            res.json({
                data:s_res
            })
        })
    })
})

export default router