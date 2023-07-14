var arrayGrid = [[0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0],
                 [0,0,0,0]];
imprimeGrid();

const botaoTeste = document.querySelector(".botao-teste")
botaoTeste.addEventListener('click', () => {
    teste();
})

function imprimeGrid() {
    const arrayGridConvertida = arrayGrid.join('<br>')
    const HTMLgrid = document.querySelector(".grid");
    HTMLgrid.innerHTML = arrayGridConvertida
}

function getNumeroAleatorio(totalDeNumeros) {
  return Math.floor(Math.random() * totalDeNumeros);
}

function criaNovoItem() {
  const l = getNumeroAleatorio(4);
  const c = getNumeroAleatorio(4);

  arrayGrid[l][c] === 0? arrayGrid[l][c] = 2 : criaNovoItem();
  imprimeGrid();
}

function teste() {
    criaNovoItem();
}