const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./client/dist'))

app.get('/', (req, res) => {
  res.send('Test')
})

app.get('/Bonds', (req, res) => {

})

app.post('/Bonds', (req, res) => {

})
// format the date and $ data to look better on the front end before sending it

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})