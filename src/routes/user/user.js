const express = require('express');
const Database = require('../../database/config');
const router = express();


router.get("/api/user/info", async (req, res) => {
    console.log('Request to /info');
    const db = await Database.getMongoClient();
    res.send("USER INFO RUN")
});

router.get("/api/user/info/1", async (req, res) => {
    const db = await Database.getMongoClient();
    res.send("USER INFO RUN  11")
});


module.exports = router;