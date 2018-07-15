const mongoose = require('mongoose')
const router = require('express').Router()
const DucksFood = mongoose.model('DucksFood')

// Post method called when a new ducksFood is added
router.post('/', (req, res, next) => {
  const { body } = req

  // Checks if there is no name
  // and sends a 422 status code
  // with a error message
  if (!body.name) {
    return res.status(422).json({
      erros: {
        name: 'is required'
      }
    })
  }

  // Checks if there is no type
  // and sends a 422 status code
  // with a error message
  if (!body.type) {
    return res.status(422).json({
      erros: {
        type: 'is required'
      }
    })
  }

  // Creates an instance of the ducksFood
  // with data coming from front end
  const finalDucksFood = new DucksFood(body)
  // Saves the new ducksFood into database
  return finalDucksFood
    .save()
    .then(() => res.json({ ducksFood: finalDucksFood.toJSON() }))
    .catch(next)
})

// Gets all ducksFoods
// sorting by the last created
// ducksFoods
router.get('/', (req, res, next) => {
  return DucksFood.find()
    .sort({ createdAt: 'descending' })
    .then(ducksFoods =>
      res.json({ ducksFoods: duckFoods.map(dfood => dfood.toJSON()) })
    )
    .catch(next)
})

router.param('id', (req, res, next, id) => {
  return DucksFood.findById(id, (err, food) => {
    if (err) {
      return res.sendStatus(404)
    } else if (food) {
      req.ducksFood = food
      return next()
    }
  }).catch(next)
})

// Gets an ducksFood by its id
router.get('/:id', (req, res, next) => {
  return res.json({
    ducksFood: req.ducksFood.toJSON() // does it finds automatically?
  })
})

// Not sure but I think this is the method called
// when a user intends to update an ducksFood
router.patch('/:id', (req, res, next) => {
  const { body } = req

  if (typeof body.name !== 'undefined') {
    req.ducksFood.name = body.name
  }

  if (typeof body.tpye !== 'undefined') {
    req.ducksFood.tpye = body.tpye
  }

  return req.ducksFood
    .save()
    .then(() => res.json({ duckFood: req.duckFood.toJSON() }))
    .catch(next)
})

// Deletes an ducksFood by its id
router.delete('/:id', (req, res, next) => {
  return DucksFood.findByIdAndRemove(req.ducksFood._id)
    .then(() => res.sendStatus(200))
    .catch(next)
})

// exports the router
module.exports = router
