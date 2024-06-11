function ordenarArray(array) {
    return array.sort((a, b) => a - b);
}

function ordenarNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        const arrayOriginal = [num1, num2, num3];
        const arrayOrdenado = ordenarArray([...arrayOriginal]); // Cria uma cópia do array para ordenar

        document.getElementById('arrayOriginal').textContent = `[${arrayOriginal.join(', ')}]`;
        document.getElementById('arrayOrdenado').textContent = `[${arrayOrdenado.join(', ')}]`;
    } else {
        alert('Por favor, insira três números válidos.');
    }
}
