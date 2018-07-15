const router = require('express').Router()

router.use('/ducksfood', require('./ducksFood'))
router.use('/fedducks', require('./fedDucks'))
// router.use('/locations', require('./locations'))

module.exports = router
