import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'





import Single_line_routes from './routes/Single_line_routes.js'
import User_routes from './routes/User_routes.js'
import Paragraph_routes from './routes/Paragraph_routes.js'

dotenv.config() // importing secret information

const PORT = process.env.PORT //PORT defining 

const app = express()


app.use(cors())
app.use(express.json());

//Configuring Routes from defferent Files  

app.use('/single',Single_line_routes)
app.use('/user',User_routes)
app.use('/paragraph',Paragraph_routes)

app.get('*',(req,res) => {
    res.send('fdhkjas')
})

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true})
    .then( () => app.listen(PORT , () => console.log(`SERVER RUNNING ON ${PORT}`)))
    .catch( (error) => console.log(error.message) )
  