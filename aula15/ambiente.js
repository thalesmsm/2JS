let num = [5, 9, 12, 45, 2, 6]
num.push(4)
let pos = num.indexOf(12)
console.log(`no array original, o valor 12 está na posição ${pos}`)
console.log(`O vetor ${num} tem ${num.length} elementos`)
console.log(`Os elementos em ordem crescente: ${num.sort(function(a, b){return a-b})}`) // a função chamada de compareFunction, é chamada para organizar os numeros com mais de duas casas
console.log(`O menor número do array é ${num[0]}`)
console.log(`O maior número do array é ${num[num.length-1]}`)
console.log(`Os elementos em ordem decrescente: ${num.sort(function(a, b){return b-a})}`)
console.log(`O maior número do array é ${num[0]}`)

