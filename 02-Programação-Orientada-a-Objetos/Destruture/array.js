var nomeCompleto = "Bruno Henrique da Luz Lopes"

var [primeiroNome, nomeDoMeio, ...ultimoNome] = nomeCompleto.split(" ")

console.log("O primeiro nome é: "+primeiroNome)
console.log("O nome do meio é: " +nomeDoMeio)
console.log("O último nome é: "  +ultimoNome.pop())

console.log(ultimoNome)
console.log("testando o resto: "  + ultimoNome)
console.log("testando o resto 2: "  + ultimoNome.join(" "))
console.log("testando o resto 3: \""  + ultimoNome.toString().replace(",", " ") + "\"")