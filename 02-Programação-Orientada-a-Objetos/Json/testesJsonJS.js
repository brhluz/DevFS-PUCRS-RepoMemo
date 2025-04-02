const json = `{
    "nome" : "Bruno",
    "nascimento" : "10/08/1997",
    "cidade" : "Curitiba"
}`

const cliente = JSON.parse(json, (key, value) => {
    if(key === "nascimento"){
        const [dia, mes, ano] = value.split('/')
        return new Date(ano, mes-1, dia)
    }
    return value
})

const hoje = new Date()
let idade = hoje.getFullYear() - cliente.nascimento.getFullYear()
const diffmes = hoje.getMonth() - cliente.nascimento.getMonth()
if(diffmes < 0 || diffmes === 0 && hoje.getDate < cliente.nascimento.getDate()){
    idade--
}

console.log(`Nome: ${cliente.nome}`)
console.log(`Nascimento: ${cliente.nascimento.tolocaletoLocaleDateString("pt-BR")}`)
console.log(`Nome: ${idade} anos`)