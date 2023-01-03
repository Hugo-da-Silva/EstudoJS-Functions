function fatorial(n){ // função fatorial com parâmetro n
    let fat = 1  
    for(let c = n; c > 1; c --) { // let c começa no numero, enquanto for maior que 1 ele vai perdendo 1
        fat *= c
    }
    return fat
}

let res = (fatorial(5))
console.log(`O fatorial da chamada é ${res}`)

// 5! = 5 x 4 x 3 x 2 x 1 = 120
