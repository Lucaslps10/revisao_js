// Usando Arrow Function
const soma = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => b !== 0 ? a / b : "Não existe divisão por zero.";

function calcular(operacao) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultadoSoma = 0;

    // Validação simples: verifica se NÃO é um número
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Resultado: Digite números válidos";
        return;
    }
    // Realiza a lógica e mostra na tela
    if (operacao == "soma") {
        resultadoSoma = soma(num1, num2);
    }
    if (operacao == "sub") {
        resultadoSoma = sub(num1, num2);
    }
    if (operacao == "mult") {
        resultadoSoma = mult(num1, num2);
    }
    if (operacao == "div") {
        resultadoSoma = div(num1, num2);
    }
    document.getElementById("resultado").innerText = `Resultado: ${resultadoSoma}`;

}

