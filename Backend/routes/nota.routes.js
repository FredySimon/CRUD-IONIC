const express = require('express');
const router = express.Router(); 
const notaCtrl = require('../controllers/nota.controllers');

router.get('/', notaCtrl.getNotas);
router.post('/', notaCtrl.createNota);
router.get('/:id', notaCtrl.getNota);
router.put('/:id', notaCtrl.editNota);
router.delete('/:id', notaCtrl.deleteNota);

module.exports = router;