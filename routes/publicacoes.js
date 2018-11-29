const express = require('express');
const router = express.Router();
const controller = require('../controllers/publicacoes');
const categorias_controller = require('../controllers/categorias');


router.get('/', categorias_controller.get_list);

router.get('/categoria/:categoria', controller.get_list);

router.get('/nova', controller.get_nova);

router.post('/nova', controller.post_nova);

router.get('/excluir/:categoria/:id', controller.excluir);

router.get('/editar/:categoria/:id', controller.get_editar);

router.post('/editar/:categoria/:id', controller.post_editar);

module.exports = router;