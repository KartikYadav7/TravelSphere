import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import connectDB from './config/connectDB.js'
import dataRoutes from './routes/dataRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import mailRoutes from './routes/mailRoutes.js'

const port = process.env.port
const app = express()
connectDB();
app.use(cors({
  origin: ["http://localhost:5173", "https://travel-sphere-hazel.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

))

app.use(express.json())
app.use('/',authRoutes);
app.use('/api',dataRoutes);

app.use('/api', paymentRoutes);
app.use('/api',mailRoutes);
app.use('/admin', adminRoutes);
app.use('/',(req,res)=>{
    res.send("Welcome to the server")
})
app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})
