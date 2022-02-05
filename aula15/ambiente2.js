let num = [4, 7, 3, 0, 1, 9]
num.sort()
/*
for (var i = 0; i <= num.length; i++) {
    console.log(num[i])
}
*/

for (var i in num) {     // lê-se: para cada indice em num escreva o numero na posição do indice
    console.log(num[i])
}
