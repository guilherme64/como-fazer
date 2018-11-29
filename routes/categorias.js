const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorias');

router.get('/', controller.get_list);

router.get('/nova', controller.get_nova);

router.post('/nova', controller.post_nova);

router.get('/excluir/:id', controller.excluir);

router.get('/editar/:id', controller.get_editar);

router.post('/editar/:id', controller.post_editar);

module.exports = router;