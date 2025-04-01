const numeros = [1,2,3,4,5,6]

const temPar = numeros.some(num => num%2 === 0)

console.log(temPar)


const roles = ["admin", "user", "manager"]

console.log(roles.some(role => role === "manager"))
console.log(roles.some(role => role === "teste"))