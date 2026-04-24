const express = require('express');
const router = express.Router();
const paginaController = require('../controllers/paginaController')

router.get('/',paginaController.listPagina);
router.get('/:id', paginaController.onePagina);
router.post('/', paginaController.createPagina);
router.put('/:id', paginaController.editPagina);
router.delete('/:id',paginaController.deletePagina);

module.exports = router;