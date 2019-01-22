'use strict'

const yes = require('yes-https')
const compression = require('compression')
const express = require('express')
const app = express()
app.use(yes())
app.use(compression())

app.use('/', express.static('dist/ng-pwa-template'))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
})
