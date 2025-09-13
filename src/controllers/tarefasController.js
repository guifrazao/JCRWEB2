const { _router } = require('../app');
const tarefasModel = require('../models/tarefasModel');
const path = require("path");

const getTarefas = (req, res) => {
    const tarefas = tarefasModel.getTodasTarefas();
    res.json(tarefas);
};

const getTarefasId = (req, res) => {
    const id = parseInt(req.params.id);
    const tarefa = tarefasModel.getTarefa(id);
    if (!tarefa) {
        res.status(404).json({ erro: 'Tarefa não encontrada' });
    }
    res.json(tarefa);
};

// GET /tarefas - Listar as tarefas Feitas
const getTarefasFeitas = (req, res) => {
    const tarefas = tarefasModel.getFeitas();
    res.json(tarefas);
};

const getTarefasNaoFeitas = (req, res) => {
    const tarefas = tarefasModel.getNaoFeitas();
    res.json(tarefas);
};

const paginaInicial = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'formularioTarefas.html'));
};
// POST /tarefas - Criar uma nova tarefa
const criarTarefa = (req, res) => {
    const nova = tarefasModel.criarTarefa(req.body);
    res.status(201).json(nova);
    //res.redirect('/tarefas'); //redireciona para a lista de tarefas ao criar uma nova
};

const atualizarTarefa = (req, res) => {
    const tarefa = tarefasModel.getTarefa(parseInt(req.body.id));
    tarefasModel.atualizarTarefa(tarefa, req.body);
    res.status(200).json(tarefa);
}

const removerTarefa = (req, res) => {
    const tarefa = tarefasModel.getTarefa(parseInt(req.body.id));
    tarefasModel.removerTarefa(tarefa);
    res.redirect('/tarefas')
}
module.exports = {
 getTarefas,
 getTarefasId,
 getTarefasFeitas,
 getTarefasNaoFeitas,
 criarTarefa,
 atualizarTarefa,
 paginaInicial,
 removerTarefa
};