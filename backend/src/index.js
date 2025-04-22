import express from 'express'
import authRoutes from '../routes/auth.route.js'
const app=express();
const PORT=5000 
app.use('/api/auth',authRoutes);
app.listen(PORT, ()=>{
    console.log(`App is listening on port:${PORT}`);
})