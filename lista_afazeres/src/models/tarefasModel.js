let tarefas = [
    {id: 2, titulo: "Estudar", feito: true},
];

const getTodasTarefas = () => tarefas;

const getTarefa = (id) => tarefas.find(tarefa => tarefa.id === id);

const getFeitas = () => {
    return tarefas.filter(item => item.feito === true);
}

const getNaoFeitas = () => {
    return tarefas.filter(item => item.feito === false);
}

const criarTarefa = (dadosTarefa) => {
    dadosTarefa.feito = dadosTarefa.feito === 'true';
    const novaTarefa = {
        id: tarefas.length > 0 ? Math.max(...tarefas.map(t => t.id)) + 1 : 1,
        titulo: dadosTarefa.titulo,
        feito: dadosTarefa.feito
    }

    tarefas.push(novaTarefa);
    return novaTarefa;
}

const atualizarTarefa = (tarefaAntiga, dadosTarefa) => {
    dadosTarefa.feito = dadosTarefa.feito === 'true';
    let tarefa = getTarefa(tarefaAntiga.id);

    tarefa.titulo = dadosTarefa.titulo;
    tarefa.feito = dadosTarefa.feito;

    return tarefa;
}

const removerTarefa = (dadosTarefa) => {
    tarefas = tarefas.filter(tarefa => tarefa.id !== dadosTarefa.id);
    console.log(tarefas);
}

module.exports = {
    getTodasTarefas,
    getTarefa,
    getFeitas,
    getNaoFeitas,
    criarTarefa,
    atualizarTarefa,
    removerTarefa
}