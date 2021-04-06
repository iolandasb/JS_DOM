const BotaoDeleta = () => { //Esse comando cria um botão "deleta" para, com a varável "deletarTarefa", deletar um item da lista.

    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta

}

const deletarTarefa = (evento) => { //Esse comando deleta um item da lista através do botão "deleta" codificado pela variável "BotaoDeleta" acima.

    const botaoDeleta = evento.target
        
    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove()

    return botaoDeleta

}

export default BotaoDeleta