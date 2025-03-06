const mongoose = require('mongoose')

const Constring = 'mongodb+srv://lazerxd002:0ytHKy4UYGhp2KkB@cluster0.xgyiu.mongodb.net/Surepass?retryWrites=true&w=majority&appName=Cluster0'

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