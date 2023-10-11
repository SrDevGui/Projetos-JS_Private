function tabuada() {
    var num = window.document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    var n = Number(num.value)

    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab ${c}` /*Possibilita outras linguagens saberem qual foi o item selecionado  */
            c++
            tab.appendChild(item) /* adiciona elemento filho */

        }
    }
}
