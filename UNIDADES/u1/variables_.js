const codigo = 133;
console.log(codigo);

var alumnos;
alumnos = 30;

let aulas = 9;



if (true){
    console.log("es verdadero");
    console.log(aulas);
    let prueba = 3456;
    var prueba2 = "saludos";
}
console.log(prueba2);
console.log(visible);

var visible = 12;

//tipos de datos que puedes utilizar en java script: datos primitivos y objetos

// primitivos: string, number (int, double), bigint (más alla del límite number), boolean, undefined, null, symbol

// objetos: object, arrays y funciones, tb están -> date, regExp, set, weakMap, WeakSet

// cadenas de caracteres: pueden ser declaradas con las comillas dobles, simples o invertidas (mejor no uses la invertidas).
//Para concatenar cadenas se usa el símbolo "+".
// con las invertidas se usa ${} (ejemplos abajo)

let apellidos = "abad montes";

var nombres = "pepe " + apellidos;

console.log(nombres);

//TIPOS DE DATOS

//String

var c1 = "gola";
var c2 = 'map';
let c3 = `${c1} , buenos días`;
var c4 = `${c3}, como estas`;
console.log(c1 + "    " + c2);

console.log(c4);

// Tenemos caracteres normales: a, 5, -
//Caracteres especiales: "" ò \

  var x = "\u{0238}";
  console.log(x);

  // const en tiempo de ejecución no cambia

  //el exponente 10 elevado a n se hace usando la letra e

  let t = 23e4;

  // podemos expresar números en binario, octal, hexadecimial, 0b, 0o, 0x, respectivamente
  


  // para utilizar en bigint y que se reconozca como tal tiene que terminar el número en n.

  var grande = 1234567890123456789012345678901234567890n;

  //number.max_value y number.min_value
  
  //number.max_safe y number.min_safe (quiere decir que se 65465645566556
  
  // en javascript se pueden convertir tipos de datos

  // Las siguientes son conversiones automaticas:

  // CONVERSIÓN A STRING:

  let result = 'La suma es: ' + 5;

  console.log(result); // "La suma es: 5"

  //CONVERSIÓN A NUMERO:

  let num = '10' - 2;

  //8 (el string se coniverte a número)

  let result2 = '10' + 2; //"102" concatena porque uno de los 
  //valores es string, esto ocurre en el caso de +.

  //CONVERSIÓN A BOOLEANO

  //valores false: false, 0, ""(cadena vacía), null, undefined
  //NaN

  let cb1 = false + 8;// = 8
  let cb2 = true + 8;// = 9
  let cb3 = 5 * null;// = 0

  //Si una cadena de caracteres está vacía el valor es falso si no es verdadero

// comparación de valor 5 == '5'; aquí se convierte a número para hacer comparación
//comparación de valor y tipo 5 === '5'; aquí se comparan tal como son

// si tienes un resul = "hola" * 4 el valor de esa variable es la cadena NaN

// cuando se opera con null, en el caso de la suma se considerará que null es una 
//cadena de caracteres.


//Conversión explícita.
//number('5'); // 5

//string(): convierte un valor a string

//boolean(1); // true

//MENSAJES POR CONSOLA

//console.log el más usado para imprimir mensajes informativos, se puede usar
//para depurar, mostrar resultados, valores de variables, etc.

// console.error para mostrar errores del código

//console.warn para señalar potenciales problemas del codigo pero no son errores

// console.info pensado especificamente para mensajes informativos

//console.debug muestra mensajes de depuración

//console.table los mensajes se muestran de forma estructurada

//VENTANAS DE DIÁLOGO MODALES DEL NAVEGADOR

// alert ("Ha introducido mal el correo electrónico") ventana que se utiliza para administrar un aviso de alerta

//


  







