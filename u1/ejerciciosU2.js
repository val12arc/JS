//ejercicio1
/*

var variable=1;


if (typeof variable == "string"){
    console.log("es una cadena de texto");
} else if (typeof variable == "boolean"){
    console.log("es un booleano");
} else if (typeof variable == "number"){
    console.log("Es un número");
} else{
    console.log("No tengo claro el tipo de dato que es");
}

*/

// ejercicio2

var n1 = Number (prompt("Escribe un número"));

var n2 = Number (prompt ("Escribe otro número"));


console.log("Los número son" + n1 + " y " + n2);

console.log("Elija que desea hacer:")
console.log(
    "1.SUMAR  2.RESTAR  3.MULTIPLICAR  4.DIVIDIR"
);

var opcion = Number(prompt("Indique la opción"));


switch (opcion) {
    case 1:
        var sum = n1+n2;
        console.log("la suma es:" + sum );
        break;
    case 2:
        var resta = n1 - n2;
        console.log("la suma es: " + resta);
        break;
    case 3:
        var mult = n1 * n2;
        console.log("La multiplicación es: " + mult);
        break;
    case 4:
        var div = n1/n2;
        console.log("La división es: " + div);
        break;
    default:
        break;

}
