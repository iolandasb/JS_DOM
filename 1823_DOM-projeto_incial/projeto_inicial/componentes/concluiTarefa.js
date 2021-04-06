const BotaoConclui = () => { //Esse comando cria um botão "concluir" para, com a varável "concluirTarefa", riscar um item da lista.

    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button') //A classe "check-button" foi obtida do CSS.
    botaoConclui.innerText = 'concluir'
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui

}

const concluirTarefa = (evento)=> { //Esse comando risca um item da lista através do botão "concluir" codificado pela variável "BotaoConclui" acima.

    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement // o ".parentElement está chamando o pai de "botaoConclui", que no caso é o "li".

    tarefaCompleta.classList.toggle('done') // o ".classList.toogle" executa o comando do "tarefaCompleta", que é realizar algo quando o botão é clicado, e realiza a função da classe "done" do CSS.

}

export default BotaoConclui