const express = require('express')
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
// home page
app.get("/", (req,res) => {
    res.render('./index.ejs')
})
app.listen(4000, () => {
    console.log("Server running on  http://localhost:4000")
});