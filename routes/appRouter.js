const express = require('express')
const AppsData = require('../data/appData')
const Apps = require('../models/appModel')
const expressAsyncHandler = require('express-async-handler')

const router = express.Router()

router.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    const createApps = await Apps.insertMany(AppsData.apps)
    res.send({ createApps })
  })
)

router.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const app = await Apps.findById(req.params.id)
    if (app) {
      res.send(app)
    } else {
      res.status(404).send({ message: 'Info not found' })
    }
  })
)

module.exports = router
