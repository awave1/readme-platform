const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => res.send({ works: true }))

app.listen(PORT, () => console.log(`listening server on localhost:${PORT}`))
