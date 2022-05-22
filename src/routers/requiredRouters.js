const express = require('express');
const {valid, dateUTC} = require('../middleware/methods')

const router = new express.Router();

router.get('/api/:date?', async (req, res) => {

    if (!req.params.date) {
        const date = new Date().toUTCString()
        return res.json({
            unix: Date.now(),
            utc: date
        })
    }

    if (!valid(req.params.date)) {
        return res.status(400).json({ error : "Invalid Date" })
    }

    const date = dateUTC(req.params.date)
    res.json({
        unix: req.params.date,
        utc: date
    })
})

module.exports = router