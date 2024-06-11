let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleArrayButton').addEventListener('click', () => toggleSection('frutas-iniciais', mostrarArrayInicial));
    document.getElementById('btnMostrarSegundo').addEventListener('click', mostrarSegundoElemento);
    document.getElementById('btnMostrarUltimo').addEventListener('click', mostrarUltimoElemento);
    document.getElementById('btnAdicionarAbacaxi').addEventListener('click', adicionarAbacaxi);
    document.getElementById('btnAdicionarMorango').addEventListener('click', adicionarMorango);
    document.getElementById('btnRemoverPrimeiro').addEventListener('click', removerPrimeiro);
    document.getElementById('btnRemoverUltimo').addEventListener('click', removerUltimo);
    document.getElementById('btnIndiceLaranja').addEventListener('click', mostrarIndiceLaranja);
    document.getElementById('btnFrutasComM').addEventListener('click', mostrarFrutasComM);
});

function toggleSection(sectionId, callback) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
    if (!section.classList.contains('hidden') && callback) {
        callback();
    }
}

function mostrarArrayInicial() {
    const frutasIniciais = document.getElementById('frutas-iniciais');
    frutasIniciais.innerHTML = `<h2>Frutas Iniciais</h2><p>${frutas.join(', ')}</p>`;
}

function mostrarResultado(texto) {
    const resultados = document.getElementById('resultados');
    resultados.textContent = texto;
    resultados.classList.remove('hidden');
}

function adicionarFruta(fruta) {
    if (!frutas.includes(fruta)) {
        frutas.push(fruta);
        mostrarResultado(`Adicionado '${fruta}': ${frutas.join(', ')}`);
        return true;
    } else {
        mostrarResultado(`'${fruta}' já foi adicionado.`);
        return false;
    }
}

function mostrarSegundoElemento() {
    mostrarResultado(`Segundo elemento: ${frutas[1]}`);
}

function mostrarUltimoElemento() {
    mostrarResultado(`Último elemento: ${frutas[frutas.length - 1]}`);
}

function adicionarAbacaxi() {
    adicionarFruta('abacaxi');
}

function adicionarMorango() {
    adicionarFruta('morango');
}

function removerPrimeiro() {
    frutas.shift();
    mostrarResultado(`Removido o primeiro elemento: ${frutas.join(', ')}`);
}

function removerUltimo() {
    frutas.pop();
    mostrarResultado(`Removido o último elemento: ${frutas.join(', ')}`);
}

function mostrarIndiceLaranja() {
    let indiceLaranja = frutas.indexOf('laranja');
    mostrarResultado(`Índice da 'laranja': ${indiceLaranja}`);
}

function mostrarFrutasComM() {
    let frutasComM = frutas.filter(fruta => fruta.startsWith('m'));
    mostrarResultado(`Frutas que começam com 'm': ${frutasComM.join(', ')}`);
}
