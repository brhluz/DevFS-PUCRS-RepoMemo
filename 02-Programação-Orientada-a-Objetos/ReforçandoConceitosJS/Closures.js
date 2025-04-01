function criaContador(){
    let contador = 0

    return () => {
        contador++
        console.log(contador)
    }
}

const contador01 = new criaContador()
contador01()
contador01()
contador01()
contador01()

// ------------------------

function limitarCliques(maximo){
    let contador = 0

    return () =>{
        if(contador < maximo){
            contador++
            console.log(`clique ${contador} de ${maximo}`)
        }else{
            console.log("Limite de cliques atingidos")
        }
    }
}

const HandleCliques = limitarCliques(3)
HandleCliques()
HandleCliques()
HandleCliques()
HandleCliques()

// ------------------------

function loginValidator(senhaCorreta, limiteTentativas){
    let tentativas = 0
    let bloqueado = false

    return (senhaInformada) => {
        if(bloqueado){
            console.log("Conta bloqueada por excesso de tentativas")
            return
        }

        if(senhaInformada === senhaCorreta){
            console.log("Senha correta")
            tentativas = 0
        }else{
            tentativas++
            console.log(`Senha incorreta, tentativas: ${tentativas} de ${limiteTentativas}`)

            if(tentativas >= limiteTentativas){
                console.log("Limite de tentativas excedido. Conta bloqueada!!")
                bloqueado = true
            }
        }
    }
}

login = loginValidator("1234",3)
login("6549")
login("1234")
login("987654")
login("98452")
login("9876")
login("9876")
login("9876")


// interessante, da para encapsular variaveis globais...
// resumindo, ele lembra de uma variavel mesmo após o termino do escopo da função