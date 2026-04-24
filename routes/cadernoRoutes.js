const express = require('express');
const router = express.Router();
const cadernoController = require('../controllers/cadernoController')

router.get('/',cadernoController.listCaderno);
router.get('/:id', cadernoController.oneCaderno);
router.post('/', cadernoController.createCaderno);
router.put('/:id', cadernoController.editCaderno);
router.delete('/:id',cadernoController.deleteCaderno);

module.exports = router;