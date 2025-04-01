const produtos = [
    {nome: "Notebook", preco: 4000, emPromocao:true},
    {nome: "Mousa", preco: 80, emPromocao:false},
    {nome: "Monitor", preco: 1800, emPromocao:true},
    {nome: "Teclado", preco: 150, emPromocao:false},
]

const produtosEmPromo = produtos
    .filter(item => item.emPromocao === true)
    .map(item => {
        const precoComDesconto = (item.preco*0.9).toFixed(2)
        return `\t<li>${item.nome.toUpperCase()} - R$ ${precoComDesconto}</li>`
    })
    .join("\n")

const htmlFinal = `<ul>\n${produtosEmPromo}\n</ul>`

console.log(htmlFinal)