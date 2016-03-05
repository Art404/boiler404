import express from 'express'

const router = new express.Router()
let snapshot = {'snapshot': 'lol'}

if (process.env.firebase_url) {
  const Firebase = require('firebase')
  const fire = new Firebase(process.env.firebase_url)

  fire.on('value', (data) => {
    snapshot = data.val()
  })
}

router.get('/getDB', (req, res) => {
  res.send(snapshot).end()
})

export default router
