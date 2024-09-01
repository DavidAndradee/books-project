const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elemBtn = document.getElementById(this.id)
    const categoria = elemBtn.value
    console.log(elemBtn)
    let booksFiltrados = categoria == 'disponivel' ? filterForDisponibilidade() : filterForCategoria(categoria)
    exibirLivros(booksFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcValorDispo(booksFiltrados)
        console.log(valorTotal)
        exibirValorTotal(valorTotal)
    }
    console.log(booksFiltrados);
}

function filterForCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filterForDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotal(valorTotal) {
    valorTotalDispo.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}