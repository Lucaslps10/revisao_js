function somar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let divResultado = document.getElementById('resultado');

    // Validação simples: verifica se o usuário digitou números válidos
    if (!num1 || !num2){
        divResultado.innerText = "Por favor, digite dois números válidos."
    }

    let soma = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;

    // Usando o Operador Ternário
    // Se n2 for diferente de 0, faz a conta. Se for 0, mostra a mensagem.
    let divisao = (num2 !== 0) ? (num1 / num2) : "Não existe divisão por zero";

    //Imprime o resultado na tela
    divResultado.innerText = 
        "Soma: " + soma + "\n" +
        "Subtração: " + subtracao + "\n" +
        "Multiplicação: " + multiplicacao + "\n" +
        "Divisão: " + divisao;
}


