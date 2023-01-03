// RECURSIVIDADE: abaixo temos um exemplo de recursividade para encontrar fatorial de um numero
// a grosso modo é multiplicando o numero vezes o fatorial de outro numero.
function fatorial(n) {
    if (n == 1){
        return 1 
    } else {
        return n * fatorial(n-1)
    }
}

let res = console.log(fatorial(5))



/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1

*/