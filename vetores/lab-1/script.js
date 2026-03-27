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

// Adiciona um elemento no final do array;
function executarPush() {
    const valor = document.getElementById("elemento").value
    meuArray.push(valor)
    mostrarArray()
}

// Adiciona um elemento no início do array;
function executarUnshift() {
    const valor = document.getElementById("elemento").value
    meuArray.unshift(valor)
    mostrarArray()
}

// Remove um elemento no final do array;
function executarPop() {
    meuArray.pop()
    mostrarArray()
}

// Remove um elemento no início do array;
function executarShift() {
    meuArray.shift()
    mostrarArray()
}

