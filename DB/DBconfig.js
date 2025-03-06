const mongoose = require('mongoose')

const Constring = process.env.Constring

const connectDB = async () => {
    try {
        await mongoose.connect(Constring);
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection error:', err);
        // Exit process with failure
    }
}

module.exports= connectDB()