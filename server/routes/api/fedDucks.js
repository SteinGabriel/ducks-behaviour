const mongoose = require('mongoose')
const router = require('express').Router()
const FedDucks = mongoose.model('FedDucks')

// Post method called when a new fedDucks is added
router.post('/', (req, res, next) => {
  const { body } = req

  // Checks if there is no food_id
  // and sends a 422 status code
  // with a error message
  if (!body.food_id) {
    return res.status(422).json({
      erros: {
        food_id: 'is required'
      }
    })
  }

  // Checks if there is no location_id
  // and sends a 422 status code
  // with a error message
  if (!body.location_id) {
    return res.status(422).json({
      erros: {
        location_id: 'is required'
      }
    })
  }

  // Checks if there is no ducks quantity
  // and sends a 422 status code
  // with a error message
  if (!body.ducksQty) {
    return res.status(422).json({
      erros: {
        ducksQty: 'is required'
      }
    })
  }

  // Checks if there is no food quantity
  // and sends a 422 status code
  // with a error message
  if (!body.foodQty) {
    return res.status(422).json({
      erros: {
        foodQty: 'is required'
      }
    })
  }

  // Creates an instance of the fedDucks
  // with data coming from front end
  const finalFedDucks = new fedDucks(body)
  // Saves the new fedDucks into database
  return finalFedDucks
    .save()
    .then(() => res.json({ fedDucks: finalFedDucks.toJSON() }))
    .catch(next)
})

// Gets all fedDuckss
// sorting by the last created
// fedDuckss
router.get('/', (req, res, next) => {
  return FedDucks.find()
    .sort({ createdAt: 'descending' })
    .then(fedDucks =>
      res.json({ fedDucks: fedDcuks.map(ducks => ducks.toJSON()) })
    )
    .catch(next)
})

router.param('id', (req, res, next, id) => {
  return FedDucks.findById(id, (err, ducks) => {
    if (err) {
      return res.sendStatus(404)
    } else if (ducks) {
      req.fedDucks = food
      return next()
    }
  }).catch(next)
})

// Gets an fedDucks by its id
router.get('/:id', (req, res, next) => {
  return res.json({
    fedDucks: req.fedDucks.toJSON() // does it finds automatically?
  })
})

// Not sure but I think this is the method called
// when a user intends to update an fedDucks
router.patch('/:id', (req, res, next) => {
  const { body } = req

  if (body.food_id !== 'undefined') {
    req.fedDucks.food_id = body.food_id
  }

  if (body.location_id !== 'undefined') {
    req.fedDucks.location_id = body.location_id
  }

  if (body.ducksQty !== 'undefined') {
    req.fedDucks.ducksQty = body.ducksQty
  }

  if (body.foodQty !== 'undefined') {
    req.fedDucks.foodQty = body.foodQty
  }

  return req.fedDucks
    .save()
    .then(() => res.json({ fedDucks: req.fedDucks.toJSON() }))
    .catch(next)
})

// Deletes an fedDucks by its id
router.delete('/:id', (req, res, next) => {
  return FedDucks.findByIdAndRemove(req.fedDucks._id)
    .then(() => res.sendStatus(200))
    .catch(next)
})

// exports the router
module.exports = router
