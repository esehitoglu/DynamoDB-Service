const express = require('express')
const router = express.Router()
const postController = require('../../controller/Posts')

router.post('/',postController.add)
router.get('/',postController.fetchAll)
router.get('/:id',postController.single)
router.put('/',postController.update)
router.delete('/:id',postController.delete)

module.exports = router