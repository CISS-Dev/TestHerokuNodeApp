const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()



// app.use('/', serveStatic(path.join(__dirname, '/dist')))
// app.get(/.*/, function (req, res) {
//     res.sendFile(path.join(__dirname, '/dist/index.html'))
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

const port = process.env.PORT || 4000

app.listen(port)
console.log(`app is listening on port: ${port}`)