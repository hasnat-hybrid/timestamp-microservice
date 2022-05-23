const express = require('express');
const {date} = require('../middleware/methods')

const router = new express.Router();

router.get('api/:date?', async (req, res) => {
    
    res.set({ 'Content-Type': 'application/json' })

    if (!req.params.date) {
        const date = new Date().toUTCString()
        return res.json({
            unix: Date.now(),
            utc: date
        })
    }

    if (!isNaN(req.params.date)) {
        return res.json({
            unix: parseInt(req.params.date),
            utc: date(parseInt(req.params.date)).toUTCString()
        })
    }

    else if (date(req.params.date) == 'Invalid Date') {
        return res.send(JSON.stringify({
            error : "Invalid Date"
        }))
    }

    
    else if (req.query.type == 'unix') {
        return res.json({
            unix: Math.floor(date(req.params.date).getTime() / 1000)
        })
    }
    else if (req.query.type == 'utc') {
        return res.json({
            utc: date(req.params.date).toUTCString()
        })
    }

    res.json({
        unix: Math.floor(date(req.params.date).getTime() / 1000),
        utc: date(req.params.date).toUTCString()
    })
    
})


// router.get('/api/', async (req, res) => {
    
//     const date = new Date().toUTCString()
//         return res.json({
//             unix: Date.now(),
//             utc: date
//         })
// })

// router.get('/api/:date?', async (req, res) => {

    // if (!req.params.date) {
    //     const date = new Date().toUTCString()
    //     return res.json({
    //         unix: Date.now(),
    //         utc: date
    //     })
    // }

//     if (!valid(req.params.date)) {
//         return res.status(400).json({ error : "Invalid Date2" })
//     }

//     res.json({
//         unix: parseInt(req.params.date),
//         utc: dateUTC(req.params.date)
//     })
// })

module.exports = router