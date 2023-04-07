const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  const data = {
    message: 'Hello World!',
    timestamp: Date.now()
  }
  res.json(data)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
