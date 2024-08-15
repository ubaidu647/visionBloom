const express = require('express');
const router = express();


router.get("/user/info", (req, res) => {

    res.send("USER INFO RUN")
});

router.get("/user/info/1", (req, res) => {

    res.send("USER INFO RUN  11")
});


module.exports = router;