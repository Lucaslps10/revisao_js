const meuArray = []

function mostrarArray() {
    const div = document.getElementById("meuArray")
    div.innerHTML = ""
    for (let item of meuArray) {
        div.innerHTML += `
            <span class="bg-gray-500 text-white text-3xl py-2 px-4 mx-5 rounded">
                ${item}
            </span>
        `
    }
}

/*
A partir da questão anterior, implemente as funções que modificam o array, adicionando e removendo
elementos, usando o loop for e método slice. Queremos o comportamento das funções unshift, push, 
pop e shift. As funções deverão ter a seguinte assinatura:
*/

// function pop(array): Remova o último elemento do array.

function meuPop(array) {
    if (array.length === 0) return;

    // Apenas percorremos para simular a iteração sobre os elementos
    for (let i = 0; i < array.length; i++) {
        // Quando o loop chegar no último índice...
        if (i === array.length - 1) {
            // Cortamos o comprimento do array original em 1
            array.length = array.length - 1;
        }
    }
    
    mostrarArray();
}
// function push(array, elemento): Adiciona um elemento ao final de um array.

function meuPush(array, valor) {
    // Tamanho atual do array
    let tamanhoAtual = array.length;

    // O loop percorre as posições existentes. 
    // Quando 'i' for igual ao tamanhoAtual, encontramos a primeira vaga livre.
    for (let i = 0; i <= tamanhoAtual; i++) {
        if (i === tamanhoAtual) {
            array[i] = valor;
        }
    }
    
    mostrarArray();
    
}

// function unshift(array, elemento): Adiciona um elemento ao início de um array. Cada elemento
// existente do array precisa ser deslocado uma posição para cima antes que o novo dado seja adicionado.

function meuUnshift(array, elemento){
    for(let i = array.length; i > 0; i--){
        array[i] = array[i - 1];
    }
    array[0] = elemento;
    mostrarArray();
}

// function shift(array): Remova o primeiro elemento do array, deslocando as posições posteriores. 
// Remover elementos do início de um array requer deslocar os elementos para o início do array.

function meuShift(array){
    if (array.length === 0) {
        return undefined;
    }
    for(let i = 0; i < array.length - 1; i ++){
        array[i] = array[i + 1];
    }
    array.length = array.length - 1;
    mostrarArray();
}

