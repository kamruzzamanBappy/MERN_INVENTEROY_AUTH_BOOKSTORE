const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
    app.use('/', (req, res) => {
        res.send(' Book store is running')
      })
  }

  main().then(()  => console.log("Mongodb connect successfully!"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})