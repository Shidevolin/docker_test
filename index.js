const express = require('express')
const app = express()
const fs = require('fs')

app.listen(8080, function(err){
    if(err) console.log(err)
    console.log(`Follow me...`)
})

app.get('/', function(req, res){
    let a = fs.readdirSync('.')
    a = JSON.stringify(a)
    res.send(a)
})
