const express = require('express')
const app = express()
const port = 3000

var admin = require("firebase-admin");

var serviceAccount = require("private\firebaseprivatekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('User Info Here')
});

app.get('/signup', (req, res) => {
  res.send('User Info Here')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})