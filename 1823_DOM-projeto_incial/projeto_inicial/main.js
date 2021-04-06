//"( ()=> {": Ver observação ao final sobre IIFE. Este comando era uma forma de encapsular todo o código e garantir a segurança da informação, não o mostrando no console. Porém o comando abaixo também funciona nesse sentido.
import BotaoConclui from "./componentes/concluiTarefa.js"
import BotaoDeleta from "./componentes/deletaTarefa.js"

    const criarTarefa = (evento) => { //"() =>": função anônima, mesmo que "function ()".
    
    evento.preventDefault() //.preventDefault(): previne um comportamento padrão de um formulário.
    
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li') //Aqui está sendo criada uma lista HTML.
    tarefa.classList.add('task') //A classe "task" foi obtida do CSS.

    const conteudo = `<p class="content">${valor}</p>` //•	``: “template string”. Interpola/altera o template html com o JS. Para utilizar uma expressão JS dentro do template string, é necessário colocar essa expressão dentro de “${}”.

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)

    input.value = '' //Limpa o input.

}

const novaTarefa = document.querySelector('[data-form-button]') //O "const" é uma constante, uma variável que não varia.

novaTarefa.addEventListener('click', criarTarefa)

//"} )()": IIFE: “Immediately Invoked Function Expression”. Função de execução imediata. Caso todo um código seja inserido dentro dessa função (como ocorre aqui com o "( ()=> {" do começo e este "})" do final), seu código não é mostrado no console do navegador, pois ela é executada e fim. Importante não esquecer de chama-la ao final de todo o código, e fora dessa própria função (como ocorre aqui com este "()" final).

//Considerando que existem diversos arquivos JS para uma mesma página, o navegador entende que estes arquivos não estão no mesmo domínio. Para resolver este problema, basta clicar em "Go Live" na faixa azul abaixo (canto direito).
