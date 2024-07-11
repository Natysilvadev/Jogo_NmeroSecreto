let listaSorteados = []
let numeroLimite = 25;
let numeroSecreto = gerarNumeroAleatorio();
let versaoJogo = 1
let tentativas = 1


//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';
function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});   
}

function exibirMensagemIncial() {
    versaoJogo = versaoJogo + 1
    exibirTextoNaTela('h1',`Jogo do número secreto ${versaoJogo}.0`);
    exibirTextoNaTela('p',`Escolha um número de 0 a ${numeroLimite}!`);
}
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p',`Escolha um número de 0 a ${numeroLimite}!`);
    let mensagemErro = 'Você errou, tente denovo com essa dica!'
    console.log(numeroSecreto);

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    if (chute === numeroSecreto){
        exibirTextoNaTela('h1','Isso aí, acertou!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto(${numeroSecreto}) com ${tentativas} ${palavraTentativas}!`
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1',mensagemErro);
            exibirTextoNaTela('p',`O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('h1',mensagemErro);
            exibirTextoNaTela('p',`O número secreto é maior que ${chute}`);
    }
    } 
    limparCampo() 
    tentativas ++;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadesElementos = listaSorteados.length;
    if (quantidadesElementos == numeroLimite){
        listaSorteados = [];
    }
    //.includes se incluir/estiver na lista
    if (listaSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
    //.push colocar na lista o número sorteado
    listaSorteados.push(numeroEscolhido);
    console.log(listaSorteados);
    return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo() {
    numeroLimite += 50;
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    console.log(numeroSecreto);
}
