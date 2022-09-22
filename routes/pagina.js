const express = require('express');
const router = express.Router();
const paginaController = require('../controllers/pagina')

// GET
router.get('/pagina', paginaController.getHTML);

// POST
router.post('/post', paginaController.isExamen);

module.exports = router
