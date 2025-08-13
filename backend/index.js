// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from './routes/auth.route.js';
import{ connectDB }from './db/connectDB.js';



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World! rohit ');
});

app.use("/api/auth", authRoutes);


// uqkPjIMZiv0UAg2g
//rs9822649
// mongodb+srv://rs9822649:<db_password>@cluster0.wc4392y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on PORT : ', PORT);
});
