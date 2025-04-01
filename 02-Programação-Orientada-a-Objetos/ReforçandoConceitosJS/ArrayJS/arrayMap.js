const usuarios = [
    {nome: "Bruno", idade: 28},
    {nome: "Stephany", idade: 24},
    {nome: "Ana", idade: 50}
]

const listaFormatada = usuarios.map(usuario => {
    return `<li>${usuario.nome.toUpperCase()} - ${usuario.idade} anos</li>`
})

const htmlFinal = `<ul>\n\t${listaFormatada.join('\n\t')}\n</ul>`

console.log(htmlFinal)