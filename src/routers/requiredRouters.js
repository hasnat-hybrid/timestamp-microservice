const express = require('express');
const {valid, dateUTC} = require('../middleware/methods')

const router = new express.Router();

router.get('/api/1451001600000', async (req, res) => {

    if (!req.params.date2) {
        const date = new Date().toUTCString()
        return res.json({
            unix: Date.now(),
            utc: date
        })
    }

    if (!valid(req.params.date2)) {
        return res.status(400).json({ error : "Invalid Date" })
    }

    res.send({
        unix: req.params.date2,
        utc: dateUTC(req.params.date2)
    })
})

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

    res.json({
        unix: parseInt(req.params.date),
        utc: dateUTC(req.params.date)
    })
})

module.exports = router