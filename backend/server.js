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
    origin:"http://localhost:5173",
    method:["get","post","put","delete"],
    credentials:true,
}

))

app.use(express.json())
app.use('/',(req,res)=>{
    res.send("Welcome to the server")
})
app.use('/',authRoutes);
app.use('/api',dataRoutes);

app.use('/api', paymentRoutes);
app.use('/api',mailRoutes);
app.use('/admin', adminRoutes);

app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})