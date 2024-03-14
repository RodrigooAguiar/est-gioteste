/*let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);
//resultado 91 */

function pertenceFibonacci(num) {
    let a = 0, b = 1, temp;
    while (a < num) {
        temp = a;
        a = b;
        b = temp + b;
    }
    return a === num;
}


let numero = prompt("Informe um número:");
if (pertenceFibonacci(Number(numero))) {
    alert(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    alert(`O número ${numero} não pertence à sequência de Fibonacci.`);
}


/*Vamos analisar cada sequência e completar o próximo elemento:

a) A sequência parece ser de números ímpares consecutivos, aumentando de 2 em 2. Portanto, o próximo número seria 7 + 2 = 9.

b) Cada número é o dobro do anterior. Portanto, o próximo número seria 64 * 2 = 128.

c) Esta sequência parece ser de números quadrados (0^2, 1^2, 2^2, 3^2, ...). Portanto, o próximo número seria 7^2 = 49.

d) Os números parecem ser quadrados de números pares (2^2, 4^2, 6^2, 8^2, ...). Portanto, o próximo número seria 10^2 = 100.

e) Esta é a sequência de Fibonacci, onde cada número é a soma dos dois anteriores. Portanto, o próximo número seria 5 + 8 = 13.

f) Esta sequência é um pouco menos óbvia, mas parece que os números estão aumentando de 1 em 1, exceto por alguns saltos em determinados pontos.
Se seguirmos esse padrão, o próximo número depois de 19 seria 20 (mesmo que pareça que estamos esperando um salto, não há um padrão claro para os saltos).*/


/* 4) Você pode descobrir qual interruptor controla cada lâmpada seguindo estes passos:

1. Ligue o primeiro interruptor e deixe-o ligado por alguns minutos. Isso fará com que a lâmpada correspondente esquente.
2. Desligue o primeiro interruptor e ligue o segundo interruptor.
3. Vá até a sala das lâmpadas.

A lâmpada que estiver acesa é controlada pelo segundo interruptor.
Toque nas lâmpadas apagadas. A lâmpada que estiver quente é controlada pelo primeiro interruptor.
A lâmpada restante, que está apagada e fria, é controlada pelo terceiro interruptor

Dessa forma, você consegue identificar qual interruptor controla cada lâmpada com apenas uma ida até a sala das lâmpadas. Não é necessário usar duas idas.*/



function inverterString(str) {
    let stringInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str.charAt(i);
    }
    return stringInvertida;
}

// Exemplo de uso
let stringOriginal = prompt("Informe uma string:");
let stringInvertida = inverterString(stringOriginal);

alert("String original: " + stringOriginal);
alert("String invertida: " + stringInvertida);
