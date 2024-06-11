function ordenarArray(array) {
    if (array.length !== 2) {
        throw new Error('O array deve conter exatamente 2 números.');
    }
    
    return array.sort((a, b) => a - b);
}

function ordenarNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const resultado = ordenarArray([num1, num2]);
        document.getElementById('resultado').textContent = `[${resultado[0]}, ${resultado[1]}]`;
    } else {
        alert('Por favor, insira dois números válidos.');
    }
}
