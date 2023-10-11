
var lista = []
var tela = window.document.getElementById('mensagemfinal')
function start() {
    var select = window.document.getElementById('numbercontas')
    var texto = document.createElement('option')
    var number = window.document.getElementById('takenumber')
    var numero = Number(number.value)

    if (lista.includes(numero)) {
        alert(`O numero já está adicionado na lista`)
    }
    else if (!isNaN(numero) && numero > 0 && numero <= 100) {
        lista.push(numero)
        texto.innerHTML = `valor ${numero} adicionado`
        select.appendChild(texto)
        document.getElementById('takenumber').value = "" // Limpa o campo de entrada input }
    } else {
        alert(`Insira um numero valido`)
    }
    tela.innerHTML = ""
}

function finalizar() {
    if (lista.length == 0) {
        alert(`Adicione valores antes de finalizar`)
    } else {
        var cumprimento = lista.length
        var maior = Math.max.apply(null, lista)
        var menor = Math.min.apply(null, lista)
        var x = 0
        for (var c = 0; c < lista.length; c++) {//  Dentro do loop, estamos acumulando os valores da lista na variável x. O operador += é usado para adicionar o valor atual da lista (no índice c) ao valor atual de x
            x += lista[c]
        }
        tela.innerHTML = `Ao todo temos ${cumprimento} números cadastrados <br> O maior valor informado foi o ${maior} <br> O menor numero encontrado foi ${menor} <br> Somando todos os valores temos ${x} <br> A media de todos os valores digitados é ${x / c}`
    }
}
