const express = require('express');
const router = express.Router();


router.get("/info", (req, res) => {
    console.log('Request to /info');
    res.send("USER INFO RUN")
});

router.get("/info/1", (req, res) => {

    res.send("USER INFO RUN  11")
});


module.exports = router;