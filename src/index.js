const express = require('express')
const path = require('path'); 
const bodyParser = require('body-parser')
require('dotenv').config();
const {connectMongoClient,connectMongoose } = require('./database/config');

const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// connectMongoClient();
// connectMongoose();
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');

//Router
const userRoutes = require('./routes/user/user');
// const staffRoutes = require('./routes/staff/staff');


app.use('/standard', userRoutes)
// app.use('/api', staffRoutes)
// home page
app.get("/", (req,res) => {
    res.render('./index.ejs')
})
app.listen(4000, () => {
    console.log("Server running on  http://localhost:4000")
});