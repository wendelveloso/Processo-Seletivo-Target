
//QUESTÃO 01

i = 13, soma = 0, k = 0

while (k < i) {
    k = k +1
    soma = soma + k 
}

console.log(soma);
//SOMA  = 91

/////////////////////////////////////////////////////////

//QUESTÃO 02

const pertenceOuNaoFibonacci = (numero) => {
    let a = 0
    let b = 1

    while (b < numero) {
        let auxiliar = b
        b = a + b
        a = auxiliar
    }

    if (b === numero) {
        return true
    } else {
        return false
    }
}

const numero = 8
const pertence = pertenceOuNaoFibonacci(numero)

if (pertence) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci`);  
}

/////////////////////////////////////////////////////////

//QUESTÃO 03

//Letra a)    -Uma sequência de numeros ímpares 
9
//Letra b)    -Multiplicar o último número por 2
128
//Letra c)    -Sequência dos números naturais consecutivos elevado a ele mesmo
49
//Letra d)    -Sequência dos números pares consecutivos elevado ao quadrado
100
//Letra e)    -Sequência de Fibonacci (O proximo número, será a soma dos dois anteriores.)
13
//Letra f)    -Por os últimos quatro números seguir uma progressão regular, acredito que seja 20 o próximo número.
20

/////////////////////////////////////////////////////////

//QUESTÃO 04

`ligaria o INTERRUPITOR 01, o deixaria ligado por um tempo, finalizado esse tempo, eu o desligaria e passaria a ligar o INTERRUPITOR 02 e logo em seguida, iria visitar a SALA 1, agora temos algumas possibilidades: lâmpada ligada ou desligada na primeira sala, a lâmpada estando ligada, tenho certeza que o INTERRUPITOR 2 é o responsavel em ligar a lâmpada da SALA 1, pois o deixei ligado antes de fazer minha primeira visita as sala. Caso a lâmpada esteja apagada, eu a tocaria para sentir a temperatura, se estivesse quente, eu teria a certeza que o INTERRUPITOR 01 é o responsavel em ligar a lâmpada da SALA 1, pois minha primeira ação foi ligar o INTERRUPITOR 01 e aguardar certo tempo, caso ela esteja fria e apagada, só resta o INTERRUPITOR 03 ser o responsavel em ligar a lâmpada da SALA 1. Iria usar a mesma lógica na SALA 2, dessa forma, saberia exatamente quais INTERRUPITORES ligam suas respectivas lâmpadas.`

/////////////////////////////////////////////////////////

//QUESTÃO 05

const inverterCaracteresString = (string) => {
    let stringAuxiliar = ''
    for (let i = string.length -1; i >= 0; i--) {
       stringAuxiliar += string[i]
    }
    return stringAuxiliar
}

let stringInvertida = inverterCaracteresString("I love Target")
console.log(stringInvertida);








