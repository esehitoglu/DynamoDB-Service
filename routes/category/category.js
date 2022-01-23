const express = require('express')
const router = express.Router()
const categoryController = require('../../controller/Category')

router.post('/',categoryController.add)
router.get('/',categoryController.fetchAll)
router.get('/:id',categoryController.single)
router.put('/',categoryController.update)
router.delete('/:id',categoryController.delete)

module.exports = router