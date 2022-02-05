function fatorial(n) {
    let fat = 1
    for (var i = n; i >= 1; i--) {
        fat *= i
        console.log(`${i} x`)
    } 
    return fat
}

console.log(fatorial(5))

/*
function fatorial (n) {
		if ( n == 1) {
				return 1
		} else {
					return n * fatorial(n-1)
		}
}
*/