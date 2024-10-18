import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authRouter from './routes/auth.js'
import connectToDatabase from './db/db.js'

connectToDatabase()
const app = express()

// mongoose.connect('mongodb://localhost:27017/?directConnection=true')

app.use(cors())
app.use(express.json())
app.use('/api/auth' , authRouter) 

const port = process.env.PORT || 5000; 
app.listen(port, ()=>{
  console.log(`Servr is listening ${port}`)
})
