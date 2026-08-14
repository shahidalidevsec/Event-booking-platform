const express =require("express")
const dotenv = require("dotenv")
const cors =require("cors")
const mongoose=require("mongoose");
const authRoutes = require("./routes/auth.js");
const eventRoutes = require('./routes/events.js');
const bookingRoutes = require('./routes/booking.js');

dotenv.config();



const app =express();
app.use(cors());
app.use(express.json());

// routes 
app.use('/api/auth',authRoutes);
app.use('/api/events',eventRoutes);
app.use('/api/bookings',bookingRoutes);


//mongo db configuration
mongoose.connect(process.env.MONGODB_URL) 
.then(()=>{
    console.log("Connected to MongoDB");
    
})
.catch(()=>{
    console.error("Error connected to mongoDb:",error);
    
})

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server running on this port ${PORT}`);
})