// script.js
function calcularMagia() {
    const input = document.getElementById('input-numeros').value;
    const numerosMagicos = input.split(',').map(Number);
    
    if (numerosMagicos.includes(NaN)) {
        alert("Por favor, insira apenas números inteiros não negativos.");
        return;
    }

    if (numerosMagicos.some(numero => numero < 0)) {
        alert("Por favor, insira apenas números inteiros não negativos.");
        return;
    }

    const totalElementos = numerosMagicos.length;
    const somaMagica = numerosMagicos.reduce((acumulador, numero) => acumulador + numero, 0) * totalElementos;

    document.getElementById('resultado').innerText = `A soma mágica é: ${somaMagica}`;
}
