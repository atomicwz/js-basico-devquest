
var numero1 = prompt('Digite um número')
var numero2 = prompt('Digite outro número')


function somar(n1, n2){
    let soma = numero1 + numero2
    return 'O resultado da soma é: ' + soma
}
console.log(somar())

function subtrair (n1, n2){
    let subtracao = numero1 - numero2
    return 'O resultado da subtração é: ' + subtracao
}
console.log(subtrair())

function multiplicar(n1, n2){
    let multiplicacao = numero1 * numero2
    return 'O resultado da multiplicação é: ' + multiplicacao
}
console.log(multiplicar())

function dividir(n1, n2){
    let divisao = numero1 / numero2
    return 'O resultado da divisão é: ' + divisao
}
console.log(dividir())
