// atribuição das variáveis globais

const escolha = document.querySelector("#escolha")
const escolha64 = document.querySelector("#escolha64")
const botao = document.querySelector("#submit")
const selecionador = document.querySelector("#selecionador")
const radio = document.getElementById("options")
const rtexto = document.getElementById("texto")




//eventos:

radio.onclick = function () {   
    if (radio.value == 1) {
        selecionador.style.display = "flex"
    }
    
    else if (radio.value == 64) {
        selecionador.style.display = "none"
    } }

botao.onclick = function () {
    
    let cri = document.getElementById("cri")
    let decri = document.getElementById("decri")
    let numero = parseInt(selecionador.value)
    let result = document.getElementById("result")
    
      
    if (cri.checked) {
        if (radio.value == 1) {
            
            var texto = rtexto.value 
            var result1 = cifrado(texto, numero)
            result.innerText = result1
            
             
        } else if (radio.value ==64) {
            var texto = rtexto.value 
            var result1 = codificador(texto)
            result.innerText = result1            
        } 
    } else if (decri.checked) {
        if (radio.value == 1) {
            var texto = rtexto.value 
            var result1 = decifrado(texto, numero)
            result.innerText = result1
            

        } else if ( radio.value == 64) {
            var texto = rtexto.value 
            var result1 = decodifica(texto)
            result.innerText = result1  

        }
    }
}


// Cifra de César
function cifrado(mensagem, incremento) {
    let mensagemArr = mensagem.split('')
    let mensagemCifrada = []
    let codificadorArr = []

    for (let i = 0; mensagemArr.length > i; i++) {
        if (mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <= 90) {
            let teste = ((mensagemArr[i].charCodeAt()) - 65 + incremento) % 26
            codificadorArr.push(teste + 65)
        } else if (mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <= 122) {
            let teste = ((mensagemArr[i].charCodeAt()) - 97 + incremento) % 26
            codificadorArr.push(teste + 97)
        } else {
            codificadorArr.push(mensagemArr[i].charCodeAt())
        }
    }
    for (let j = 0; codificadorArr.length > j; j++) {
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')

}

// base64

function codificador(mensagem){
    let mensagemCodificada = btoa(mensagem)
    
    return mensagemCodificada

}

function decodifica(mensagem){
    let mensagemCodificada = atob(mensagem)
    
    return mensagemCodificada

} 


function decifrado(mensagem, incremento){
    let mensagemArr = mensagem.split('')
    let mensagemCifrada = []
    let codificadorArr = []
    
    for (let i = 0; mensagemArr.length > i; i++){
        if (mensagemArr[i].charCodeAt() >= 65 && mensagemArr[i].charCodeAt() <=90 ){
            let teste = ((mensagemArr[i].charCodeAt()) -65 - incremento)%26
            codificadorArr.push((teste < 0?teste+26:teste)+65)
            console.log("cheguei")
        }else if(mensagemArr[i].charCodeAt() >= 97 && mensagemArr[i].charCodeAt() <=122){
            let teste = ((mensagemArr[i].charCodeAt()) -97 - incremento)%26
            codificadorArr.push((teste < 0?teste+26:teste)+97)
            console.log("cheguei")
        }else{
            codificadorArr.push(mensagemArr[i].charCodeAt())
            console.log("cheguei")
        }
    }
    for (let j = 0; codificadorArr.length > j; j++){
        mensagemCifrada.push(String.fromCharCode(codificadorArr[j]))
    }
    return mensagemCifrada.join('')

}

