const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');
// Definindo as rotas para as operações CRUD
router.get('/tarefas', tarefasController.getTarefas);
router.get('/tarefas/:id', tarefasController.getTarefasId);
router.get('/tarefasFeitas', tarefasController.getTarefasFeitas);
router.get('/tarefasNaoFeitas', tarefasController.getTarefasNaoFeitas);
router.post('/tarefas', tarefasController.criarTarefa);
router.put('/tarefas', tarefasController.atualizarTarefa);
router.delete('/tarefas', tarefasController.removerTarefa);
router.get('/', tarefasController.paginaInicial);

module.exports = router;