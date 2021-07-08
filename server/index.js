const express = require('express')
const app = express()
const port = 3000
const APIcalls = require('./brain.js')
const db = require('./db/connection')
const sfDb = require('./database.js')
app.use(express.static('./client/dist'))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Test')
})

app.get('/Bonds', (req, res) => {
  //console.log(req.body)
  //console.log(req.query)

  //res.send(req.body)
  APIcalls.fetchData(JSON.parse(req.query.filters))
    .then(results => {
      //console.log(results.data)
      res.send(results.data)
    })
    .catch(err => {
      //console.log(err)
      res.status(400)
      res.send(err)
    }
    )
  // headers X-App-Token

})

app.post('/Bonds', (req, res) => {
  //console.log(req.body)
  sfDb.saveFilter(req.body, (err, docs) => {
    if (err) {
      res.status(400);
      res.send(err)
    } else {
      res.send(docs);
    }
  })
})

app.get('/Favorites', (req, res) => {
  //console.log(req.query);
  sfDb.getFavs(req.query.userName, (err, docs) => {
    if (err) {
      res.status(400);
      res.send(err)
    } else {
      res.send(docs);
    }
  })
})

app.put('/Favorites/Delete', (req, res) => {
  //console.log(req.query, req.body);
  sfDb.deleteFav(req.body.id, (err, docs) => {
    if (err) {
      res.status(400);
      res.send(err)
    } else {
      res.send(docs);
    }
  })
})
app.put('/Favorites/UpdateName', (req, res) => {
  //console.log(req.query, req.body);
  sfDb.updateFav(req.body, (err, docs) => {
    if (err) {
      res.status(400);
      res.send(err)
    } else {
      res.send(docs);
    }
  })
})
app.put('/Favorites/UpdateFilters', (req, res) => {
  //console.log(req.query, req.body);
  sfDb.updateFavFilter(req.body, (err, docs) => {
    if (err) {
      res.status(400);
      res.send(err)
    } else {
      res.send(docs);
    }
  })
})
// format the date and $ data to look better on the front end before sending it

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})