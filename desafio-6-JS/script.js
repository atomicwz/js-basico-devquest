
var numero1 = parseInt(prompt('Digite um número'))  
var numero2 = parseInt(prompt('Digite outro número')) 


function somar(){
    let soma = numero1 + numero2
    return 'O resultado da soma é: ' + soma 
}
console.log(somar())

function subtrair (){
    let subtracao = numero1 - numero2
    return 'O resultado da subtração é: ' + subtracao
}
console.log(subtrair())

function multiplicar(){
    let multiplicacao = numero1 * numero2
    return 'O resultado da multiplicação é: ' + multiplicacao
}
console.log(multiplicar())

function dividir(){
    let divisao = numero1 / numero2
    return 'O resultado da divisão é: ' + divisao
}
console.log(dividir())
