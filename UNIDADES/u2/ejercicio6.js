var a = parseInt(prompt("Introduza una base"));
var b = Number(prompt("Introduzca un exponente"));

var potencia = 1;
for (let i = 1; i <= b; i++) {
    
    potencia = potencia * a;
}

console.log ( a + " elevado a " + b + " es igual a " + potencia); 