const express = require('express')
const app = express()
const port = 3000

app.get('/weather', (req, res) => res.send('It\'s a sunny day'))

app.listen(port, () => console.log(`Listening on port ${port}...`))