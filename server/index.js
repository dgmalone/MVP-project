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
  APIcalls.fetchData(JSON.parse(req.query.filters))
    .then(results => {
      res.send(results.data)
    })
    .catch(err => {
      res.status(400)
      res.send(err)
    }
    )
  // headers X-App-Token

})

app.post('/Bonds', (req, res) => {
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
  sfDb.updateFavFilter(req.body, (err, docs) => {
    if (err) {
      res.status(400);
      res.send(err)
    } else {
      res.send(docs);
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})