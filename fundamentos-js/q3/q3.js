// Referências: https://www.w3schools.com/js/js_htmldom.asp

const form = document.getElementById('formulario');
const titulo = document.getElementById('titulo');
const container = document.getElementById('app');

// O método addEventListener() vai adicionar um evento de click ao documento;
// O método anexa um gerenciador de eventos a um document.addEventListener();
form.addEventListener('submit', function(event) {
    /*
    O método preventDefault() cancela o evento se ele for cancelável, ou seja, 
    que a ação padrão que pertence ao evento não ocorrerá.

    Aqui o objetivo é só exercitar os métodos, então não precisa enviar para outra página.
    */
    event.preventDefault();

    // 1. Guarda os dados primeiro
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    // 2. Remove o formulário e o título do mapa (DOM)
    form.remove();
    titulo.remove();

    // 3. Usa innerHTML no container para injetar a mensagem
    // Isso é mais fácil do que usar document.createElement para cada frase
    container.innerHTML = `
            <h2>Bem-vindo, ${nome}!</h2>
            <p>Seus ${idade} anos foram registrados no sistema.</p>
    `;
});


