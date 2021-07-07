const express = require('express')
const app = express()
const port = 3000
const APIcalls = require('./brain.js')

app.use(express.static('./client/dist'))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Test')
})

app.get('/Bonds', (req, res) => {
  //console.log(req.body)
  console.log(req.query)

  //res.send(req.body)
  APIcalls.fetchData(JSON.parse(req.query.filters))
  // headers X-App-Token

})

app.post('/Bonds', (req, res) => {

})
// format the date and $ data to look better on the front end before sending it

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})