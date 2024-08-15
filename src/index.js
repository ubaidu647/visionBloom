const express = require('express')
const path = require('path'); 
require('dotenv').config();

const app = express();
const {connectMongoClient,connectMongoose } = require('./database/config');
connectMongoClient();
connectMongoose()
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');

//Router
const userRoutes = require('./routes/user/user');


app.use('/api', userRoutes)
// home page
app.get("/", (req,res) => {
    res.render('./index.ejs')
})
app.listen(4000, () => {
    console.log("Server running on  http://localhost:4000")
});