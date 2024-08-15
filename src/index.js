const express = require('express')
const path = require('path'); 
require('dotenv').config();
const {connectMongoClient,connectMongoose } = require('./database/config');

const app = express();
// Global variables to store database connection instances
let mongoClientConnected = false;
let mongooseConnected = false;

// Middleware to ensure connections are established
app.use(async (req, res, next) => {
  if (!mongoClientConnected) {
    console.log("inside mongoclient", mongoClientConnected)
    await connectMongoClient();
    mongoClientConnected = true;
  }
  if (!mongooseConnected) {
    console.log("inside mongoose", mongooseConnected)

    await connectMongoose();
    mongooseConnected = true;
  }
  next();
});

// connectMongoClient();
// connectMongoose();
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');

//Router
// const userRoutes = require('./routes/user/user');
// const staffRoutes = require('./routes/staff/staff');


// app.use('/api/user', userRoutes)
// app.use('/api', staffRoutes)
// home page
app.get("/", (req,res) => {
    res.render('./index.ejs')
})
app.listen(4000, () => {
    console.log("Server running on  http://localhost:4000")
});