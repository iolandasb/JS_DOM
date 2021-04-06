# JS_DOM
Creation of a functionality in HTML that allows the insertion of items forming a list. Added items can be marked as completed or deleted

# Conceitos e Funcionalidades

•	DOM: “document object model”. É utilizado pelo navegador web para representar a página da web. Quando altera-se esse modelo com o uso do Javascript altera-se também a página Web. É muito mais fácil trabalhar com DOM do que diretamente com código HTML ou CSS. Um dos grandes responsáveis por isso tudo é o objeto “document” que é responsável por conceder ao código Javascript todo o acesso a árvore DOM do navegador Web. Portanto, qualquer coisa criado pelo navegador Web no modelo da página Web poderá ser acessado através do objeto Javascript document.

•	Usa-se o DOM principalmente para atualizar uma página Web (DOM é bastante utilizado com Ajax) ou quando se quer construir uma interface de usuário avançada. Com o DOM pode-se mover itens dentro de uma página ou criar efeitos CSS bastante interessantes sem precisar nem mesmo recarregar a página.

•	DOM: é a representação de um arquivo base de HTML em formato de “nós” (“nodes”), onde cada nó é um objeto, e cada objeto representa uma TAG ou texto do arquivo HTML. Quando o navegador interpreta o código HTML, ele cria essa representação em formato de objeto.
  - Window: representa uma janela.
  - Document: objeto que aponta para o documento atual, onde se está no documento atual.
  - "<html>": estrutura do HTML, conforme representado na figura abaixo. Observar que “title” é filho do “head”, e “hl” e “p” são filhos o “body”. Essa estrutura de pais e filhos é muito importante quando se manipula objetos.
  - <img>![image](https://user-images.githubusercontent.com/60974082/113653637-9bd51700-966c-11eb-8b7d-accb81b61e86.png)</img>
 
  - Árvore: essa imagem acima representa a chamada “árvore do DOM”.

•	document.getElementById('id'): seleciona o elemento pelo id passado.

•	document.getElementsByClassName('classe'): retorna um array dos elementos pelo nome da classe passada.

•	document.getElementsByTagName('tag'): retorna um array dos elementos pelo nome da tag passada.

•	document.querySelectorAll(seletor): devolve todos os seletores com o mesmo nome.

•	document.querySelector(‘nome do seletor (tag, id, classe, etc)’): acessa o seletor informado.

•	const: é uma variável que não varia, sendo uma constante.

•	(nome da variável).addEventListener(evento1, evento2, evento3): “escuta” um evento, capta um evento. Comporta vários eventos (representados aqui por “evento1, evento2, evento3”.

•	click: o evento é disparado quando o botão de um dispositivo apontador (normalmente o botão de um mouse) é pressionado e solto logo em seguida em um mesmo elemento.

•	(nome do evento).preventDefault(): previne um comportamento padrão de um formulário.

•	Data Attributes:  são atributos que permitem permite que informações proprietárias sejam trocadas via script entre o HTML e sua representação DOM. Ele é representado por “data-“, sendo que após isso pode-se colocar o nome que quiser.

•	Aspas: “template string”. Interpola/altera o template html com o JS. Para utilizar uma expressão JS dentro do template string, é necessário colocar essa expressão dentro de “${}”. Esse sinal comporta os comandos relacionados às strings.

•	() =>: função anônima, mesmo que "function ()".

•	(nome da variável).innerHTML: acessa um conteúdo no HTML. Utilizado na manipulação do DOM, o innerHTML retorna todo o texto e o html que existem no elemento. Ele retorna todo o html existente, retornando também às tags, e não somente o texto.

•	document.createElement(‘’): cria um elemento dentro do DOM (dentro de ‘’ deve ser inserida uma TAG. Dessa forma, se cria uma TAG no JS que será aplicável no HTML).

•	(nome da varável).appendChild(nome da variável): anexa um elemento dentro do outro. É um dos métodos fundamentais da programação para a web usando o DOM. O método appendChild() insere um novo nó na estrutura do DOM de um documento, insere um elemento filho em um elemento pai. É sempre adicionado no final do nó.

•	(nome da variável).classList.add(‘’): acessa uma lista de classe. Dentro de ‘’ deve ser inserido o nome da classe.

•	(nome da variável).classList.toggle(‘’): executa uma classe mediante um comando. Dentro de ‘’ deve ser inserido o nome da classe. A variável nomeada deve ser a que possui o comando. Esse comando devolve uma booleana verdadeira ou falsa.

•	Nó (node): é um elemento filho, como por exemplo, uma “li” dentro de uma “ul”. Todo nós pode ser acessado pelo JS. Podem ser criados, deleteados ou modificados.

•	insertBefore(pai, filho): coloca um nó antes do outro.

•	replaceChild(elemento1, elemento2): substitui o nó elemento 1 pelo nó elemento2.

•	removeChild(elemento): remove um nó da árvore.

•	Componente: parte do todo, parte da aplicação. Vários componentes criam uma aplicação. Eles são idependentes. Geralmente, seus nome começam com letra maiúscula.

•	(nome da variável).innerText: representa o conteúdo de texto que será renderizado em um comando. É o texto que será mostrado quando o comando for dado.

•	(nome do evento).target: indica o alvo do evento, em quem foi clicado.

•	(nome da variável).parentElement: chama o “pai” imediato do elemento/do nó. Exemplo:
  - <img>![image](https://user-images.githubusercontent.com/60974082/113653715-c030f380-966c-11eb-8a2f-204b709a9592.png)</img>
 
  - No caso, “ul” é pai de “li”, “nav de “ul” e “header” de “nav”.

•	IIFE: “Immediately Invoked Function Expression”. Função de execução imediata. Caso todo um código seja inserido dentro dessa função, seu código não é mostrado no console do navegador, pois ela é executada e fim. Importante não esquecer de chama-la ao final de todo o código, e fora dessa própria função.

•	(nome da variável).remove(): remove um elemento/nó da árvore.

•	Módulos: pequenas partes do código que juntos formam um todo.

•	export default (nome da função/variável): quando temos arquivos JS separados em arquivos diferentes (os chamados componentes), uma forma de levar a informação de um arquivo para outro é usar este comando. Também é necessário importar a informação no arquivo JS para o qual se está enviado, que é o comando descrito abaixo. Pode ser escrito de forma mais simplificada, como por exemplo incluindo a palavra “export” na frente da variável/função.

•	import (nome da função/variável) from ‘./(nome da pasta)/(nome do arquivo).js’: comando para importar as informações de um arquivo JS, conforme descrito no comando acima (“export default”).

•	Entender Same Origin Police e CORS - Domínio: https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy. O site mostra os diferentes domínios aceitos pelos programas.
  - Considerando que podem existir diversos arquivos JS para uma mesma página, o navegador entende que estes arquivos não estão no mesmo domínio. Para resolver este problema, basta clicar em "Go Live" na faixa azul que fica na parte de baixo (canto direito) do Visual Studio, conforme segue:
  - <img>![image](https://user-images.githubusercontent.com/60974082/113653808-e9ea1a80-966c-11eb-8ab5-1e1e0b82f821.png)</img>
  - <img>![image](https://user-images.githubusercontent.com/60974082/113653822-ed7da180-966c-11eb-8b04-26667a284269.png)</img>
