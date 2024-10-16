import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRouter from './routes/auth.js'

const app = express()

mongoose.connect('mongodb://localhost:27017/?directConnection=true')

app.use(cors())
app.use(express.json())
app.use('/api/auth' , authRouter) 

const port = process.env.PORT || 8080; 
app.listen(port, ()=>{
  console.log(`Servr is listening ${port}`)
})
