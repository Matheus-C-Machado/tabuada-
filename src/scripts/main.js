function calcularTabuada() {
    let numero = document.getElementById('numero').value;
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpa o resultado anterior

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        let linha = document.createElement('div');
        linha.textContent = `${numero} x ${i} = ${resultado}`;
        resultadoDiv.appendChild(linha);
    }
}
