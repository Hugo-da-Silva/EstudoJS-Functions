function soma(n1=0 , n2=0){ // =0 na frente do par de parâmetros mostra que se nada for digitado dentro da chamada o valor de n será 0
    return n1 + n2 // retorno para soma dos dois numeros
}

let res = (soma(2, 8)) // variavel criada para a chamada soma
console.log(`a soma é igual a ${res}`) // "mostre na tela o valor de res"