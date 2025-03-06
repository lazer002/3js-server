const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({origin:'http://localhost:5173',credentials:true}))
const PORT = process.env.PORT || 5000;
const router = require('./route/router')
require('./DB/DBconfig')
app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.use('/api', router)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});