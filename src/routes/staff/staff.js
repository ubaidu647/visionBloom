const express = require('express');
const router = express();


router.get("/staff/info", (req, res) => {

    res.send("staff INFO RUN")
});

router.get("/staff/info/1", (req, res) => {

    res.send("staff INFO RUN  11")
});


module.exports = router;