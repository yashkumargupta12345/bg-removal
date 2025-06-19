import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'

// App config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Initialize Middlewares
app.use(express.json())
app.use(cors())

// API Routes
app.get('/', (req, res)=> res.send('Api working'))

app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`))

