let json = "testando erro"

try{
    let erro = JSON.parse(json) 
    console.log(erro.nome)
}catch(err){
    if(err instanceof SyntaxError){
        console.log(`Erro ${err.name}: ${err.message}`)
    }else{
        console.log("Erro Imprevisto")
        throw err
    }
}finally{
    console.log("Encerra tratamento")
}