function calculo() {
    var tab = Number(document.getElementById('tab').value)
    var res = document.getElementById('res')
    var cont = 1
    res.innerHTML =''
    if(tab == 0){
        res.innerHTML = 'Toda multiplicação por Zero resulta Zero.'
    }else if(tab > 0){
        while(cont <= 10){
            res.innerHTML += `${tab} x ${cont} = ${tab * cont} <br>`
            cont++
        }
    }
}