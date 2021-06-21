const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

let beenTo = [];
let planTo = [];

app.get('/api/plan', (req, res) => {
    res.status(200).send(planTo)
})

app.post('/api/plan', (req, res) => {
    planTo.push(req.body.country)
    res.sendStatus(200)
})

app.get('/api/been', (req, res) => {
    res.status(200).send(beenTo)
})

app.post('/api/been', (req, res) => {
    beenTo.push(req.body.country)
    res.sendStatus(200)
})

app.listen(5500, () => {
    console.log('listening on port 5500')
})


