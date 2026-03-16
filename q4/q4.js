function somar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    resultado = num1 + num2;
    document.getElementById('demo').innerText = "Resultado: " + resultado;
}


