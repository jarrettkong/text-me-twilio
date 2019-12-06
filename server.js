require('dotenv').config();

const express = require('express')
const app = express();
const serveStatic = require('serve-static');
const port = process.env.PORT || 5000;

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')(accountSid, authToken)

app.use(express.json())
app.use(serveStatic(__dirname + '/build'));

app.post('/sms', (req, res) => {
  client.messages.create({
    body: req.body.message,
    from: process.env.TWILIO_FROM_NUMBER,
    to: process.env.TO_NUMBER
  }).then(() => {
    console.log('Message sent!')
    res.sendStatus(200)
  }).catch(err => res.status(404).json(err))
})

app.listen(port, console.log('App listening on port: ' + port));