let btnOrderPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrderPorPreco.addEventListener('click', ordenarForPreco)

function ordenarForPreco() {
    const livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}