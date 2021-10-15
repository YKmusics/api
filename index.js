const express = require('express')
const app = express()
app.get('/', (req, res) => {
   res.send('Hello World')
})
const handler = require('./handler/route.js')
handler(app)
app.listen(6969, () => console.log(handler(app)))
app.set('json spaces', 2)