const express = require('express');
const User = require('../schema/User');
const route = express.Router()
const jwt = require('jsonwebtoken');
const Bill = require('../schema/Bill');
const secretKey = 'fwafwafgehrjytkfjdrysgsveawagwag';

route.post('/data',(req,res)=>{
try {
    User.findOne({ username: req.body.username, password: req.body.password })
    .then(user => {
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        const token = jwt.sign({ userId: user._id, username: user.username }, secretKey, { expiresIn: '5h' });
        return res.status(200).send({ message: "User found", token });
    })
    .catch(err => {
        return res.status(500).send({ message: "Error finding user", error: err });
    });
} catch (error) {
    return res.status(500).send({ message: "API Error ", error});
    
}
})

route.get('/bills',async(req, res) => {
  try {
    const bills = await Bill.find(); 
    res.status(200).json(bills);
  } catch (error) {
    console.error("Error fetching bills:", error);
    res.status(500).json({ message: "Error fetching bills", error: error.message });
  }
});


route.post('/bills', async (req, res) => {
    try {
      const newBill = new Bill(req.body);
      await newBill.save();
      res.status(201).json({ message: 'Bill saved successfully', bill: newBill });
    } catch (error) {
      console.error('Error saving bill:', error);
      res.status(500).json({ message: 'Error saving bill', error: error.message });
    }
  });



module.exports=route
