function parimp(n){  // função declarada com parametro 
    if (n%2 == 0) {  // se n%2 for igual a 0, ai é par senão é impar
        return `Par!`  // primeiro retorno
    } else {                // em Js só pode existir no final apenas um retorno 
        return `ìmpar!`// segundo retorno
    }
}

let res = parimp(4) // variavel criada para chamada parimp
console.log(`O resultado da chamada é ${res}`) // mostre na tela o resultado da chamada