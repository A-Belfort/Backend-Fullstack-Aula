const express = require('express');
const router = express.Router();
const entityController = require('../controllers/entityController')

router.get('/',entityController.listEntity);
router.get('/:id', entityController.oneEntity);
router.post('/', entityController.createEntity);
router.put('/:id', entityController.editEntity);
router.delete('/:id',entityController.deleteEntity);

module.exports = router;