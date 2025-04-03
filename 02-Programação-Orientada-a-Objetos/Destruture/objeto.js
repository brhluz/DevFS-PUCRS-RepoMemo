// //02a_Objeto.js
// let pessoa = {nome: "Edson Moreno", idade: 42};
// let {idade: aIdade, nome, peso: oPeso=100} = pessoa;

// console.log("O nome é: "  + nome)
// console.log("A idade é: " + aIdade)
// console.log("O peso é: "  + oPeso)

// -------------------------------------------------------------


const usuarios = [
    { nome: "Bruno", idade: 28, cidade: "Curitiba"},
    { nome: "Ana", idade: 35, cidade: "Porto Alegre"},
    { nome: "Carlos", idade: 22}
]

usuarios.forEach(usuario => {
    const {nome, idade, cidade = "Cidade não informada"} = usuario;

    // console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`)

    console.log(`${nome} tem ${idade} anos e mora em ${cidade}`)
})