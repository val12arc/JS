var n = Number(prompt("Ingrese un número"));

var sum = 0;
for (let index = 1; index <= n; index++) {
    
    sum += index;
}

console.log("la suma de los primeros " + n + " números enteros es: " + sum );

