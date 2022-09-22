const express = require('express');
const router = express.Router();
const trianguloController = require('../controllers/triangulo')

// GET
router.get('/validacion', trianguloController.getHTML);

// POST
router.post('/post', trianguloController.isExamen);

module.exports = router
