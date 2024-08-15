const express = require('express');
const router = express();


router.get("/user/info", (req, res) => {

    res.send("USER INFO RUN")
});


module.exports = router;