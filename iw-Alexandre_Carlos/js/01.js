document.getElementById('calcularBtn').addEventListener('click', function() {
    const valorHoraAula = parseFloat(document.getElementById('valorHoraAula').value);
    const totalHA = parseInt(document.getElementById('totalHA').value);
    
    if (!isNaN(valorHoraAula) && !isNaN(totalHA)) {
        const totalGeral = valorHoraAula * totalHA;
        document.getElementById('totalGeral').textContent = ` ${totalGeral.toFixed(0)}`;
    } else {
        alert('Por favor, preencha os campos corretamente.');
    }
});
