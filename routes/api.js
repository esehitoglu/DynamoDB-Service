const express = require('express')
const router = express.Router()
const userEndPoint = require('./user/user')
const categoryEndPoint = require('./category/category')

router.use('/user',userEndPoint)
router.use('/category',categoryEndPoint)

module.exports = router
