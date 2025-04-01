let array = [1,2,3,9,5,6]

console.log(array.reduce( (acc,val) => acc=+val , 0))
console.log(array.reduce( (acc,val) => {
    return acc=+val
} , 0) )


const nomes = ["Bruno", "Maria", "Bruno", "Bruno", "Bruno", "Maria", "Maria", "Ana"]

const contagem = nomes.reduce( (acc,nome) => {
    acc[nome] = (acc[nome] || 0) + 1
    return acc
}, {} )

console.log(contagem)

const contagem2 = nomes.reduce((acc, nome) => {
    acc.nome = (acc.nome || 0) + 1;
    return acc;
  }, {});
  
console.log(contagem2);
  
// tsc tsc, javascript...