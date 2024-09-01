

let livros = []

const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() { // funcção assincorna
    const resposta = await fetch(endPointAPI)
    livros = await resposta.json() //promessa ao puxar os livros
    livros = aplicarDescontos(livros)
    exibirLivros(livrosComDesconto)
}



