// O método createElement() cria um novo parágrafo no documento HTML;

const elemento = document.createElement("p");
elemento.innerText = "Este é um novo parágrafo.";
document.body.appendChild(elemento);

// A propriedade innerHTML pode ser usada para obter ou alterar qualquer elemento HTML;

const elementoDois = document.getElementById("id1");
elementoDois.innerHTML = "Novo conteúdo!";

// Removendo um elemento do documento, o botão mostra bem a ação do método remove();

function myFunction() {
  const element = document.getElementById("demo");
  element.remove();
}