/* Declara una variable llamada miNombre y almacena tu primer nombre en ella. */
var miNombre = "Ayelén";
console.log (miNombre)

/* Crea una variable llamada miEdad y asigna como valor tu edad actual.*/
var miEdad = 18;
console.log (miEdad)

/* Define una variable tieneMascota y asígnale un valor booleano (true o false).*/
var tieneMascota = true
console.log (tieneMascota)

/* Escribe un condicional que indique si un número introducido es mayor, menor o igual
a cero.
*/ 
var numero = parseInt(prompt("Ingresa un número"));
console.log (numero)
if (numero > 0) {
    console.log ("El numero es mayor a cero")
} else if (numero < 0) {
    console.log ("El numero es menor a cero")
}  else if (numero = 0){

    console.log ("El numero es igual a cero")
}

/* Declara una variable llamada intereses que almacene un array con tres cosas que te
guste hacer.*/
var intereses = ["escuchar música , hacer deporte, pintar"];
console.log (intereses);

/* Crea un objeto llamado usuario con las propiedades: nombreUsuario, ciudad y
tieneLicencia.*/
var usuario = { nombreUsuario: "Aye", 
    ciudad: "Guayaquil",
tieneLicencia: false };
console.log (usuario);
/* Declara una variable datoVacio y asígnale un valor null.
*/
var datoVacio = null;
console.log (datoVacio);
/* Escribe un programa que solicite al usuario un número y muestre en consola todos
los números desde 1 hasta ese número ingresado.
*/
let num = parseInt(prompt("INGRESE UN NÚMERO"));
console.log (num);

for ( let i= 1; i <= num; i++)
console.log (i);

/* Crea una variable llamada colorHexadecimal y almacena un valor hexadecimal en
ella.*/
let colorHexadecimal = "#f4f4f4"
console.log(colorHexadecimal);

/* Define la variable miNombreCompleto concatenando tu nombre con tu apellido
usando template strings.*/
var miNombre= "Ayelén";
var miApellido= "Zúñiga";
var miNombreCompleto= `${miNombre} ${miApellido}`;
console.log (miNombreCompleto);

/* Almacena en la variable resultadoSuma el resultado de sumar 25 y 15.*/
let resultadoSuma= 25+15;
console.log(resultadoSuma);

/* Almacena en la variable resultadoResta el resultado de restar 50 menos 20.
*/
let resultadoResta= 50-20;
console.log(resultadoResta);
/* Multiplica 8 por 4 y almacena el resultado en la variable resultadoMultiplicacion*/
let resultadoMultiplicacion = 8*4
console.log (resultadoMultiplicacion);
/* Divide 100 entre 5 y guarda el resultado en la variable resultadoDivision.
*/
let resultadoDivision = 100/5;
console.log(resultadoDivision);
/*Obtén el residuo de dividir 15 entre 4 y guárdalo en una variable llamada
resultadoModulo.
*/
let resultadoModulo = 15 % 4;
console.log (resultadoModulo);
/* Incrementa en una unidad el valor de la variable puntaje usando el operador de
incremento.
*/
let puntaje = 99;
puntaje++;
console.log (puntaje);
/*Reduce en uno el valor de una variable llamada vidasRestantes usando el operador
de decremento.
*/
let vidasRestantes= 100;
vidasRestantes--;
console.log (vidasRestantes)
/* Define un array con cinco nombres de frutas diferentes e imprime el array completo.*/
let frutas= ["uvas🍇", "sandía🍉", "guineo🍌", "aguacate🥑", "manzana🍏"];
    console.log(frutas);  

/*Verifica si el valor 'manzana' está incluido en el array creado anteriormente*/
let manzanasiono = frutas.some(fruta => fruta.includes("manzana"));
console.log(manzanasiono);

/*Añade un elemento al final de un array y otro elemento nuevo en la segunda posición
del mismo.*/
let inciales = ["J", "C", "A", "R"];
inciales.push("Z");
inciales.splice(1, 0, "X");
console.log(inciales);

/*Elimina un elemento específico del array por su valor y luego elimina otro elemento
diferente por su índice.
*/
let indice = inciales.indexOf("J");
if (indice !== -1) {
    inciales.splice(indice, 1);   
}
    inciales.splice(2, 1);
console.log(indice);
console.log(inciales);

/*Compara dos variables numéricas para determinar si tienen el mismo valor y guarda
el resultado en una variable llamada igualdadNumeros.
*/
let num1 = 18;
let num2 = 16;
let igualdadNumeros = (num1 === num2)
console.log (igualdadNumeros);

/*Determina si un número es menor que otro número dado y almacena el resultado
booleano en la variable esMenor. */
let Num1= 18;
let Num2= 16;
let esMenor= (num1 < num2);
console.log(esMenor);

/*Crea un programa que guarde una palabra secreta en una variable, solicite al usuario
que introduzca la palabra y luego muestre si coincide, ignorando diferencias entre
mayúsculas y minúsculas*/
let palabrasecreta = "sapo";
let palabraIngresada = prompt("INGRESE LA PALABRA SECRETA");
if (palabraIngresada.toLowerCase() === palabrasecreta.toLowerCase()) {
    alert("¡Correcto! esa es la palabra secreta.");
} else {
    alert("Incorrecto. Intenta de nuevo.");
}
console.log(palabraIngresada);

/*Una persona puede recibir un descuento especial solo si tiene más de 18 años y gana
menos de $500 mensuales. Escribe un programa que pregunte edad e ingresos al
usuario e indique si tiene derecho al descuento.*/
let edad= parseInt(prompt("QUE EDAD TIENES?"));
let sueldo= parseFloat(prompt("¿CUÁNTO DINERO GANAS AL MES?"));
if (edad >= 18 && sueldo <500) {
    alert ("FELICIDADES TIENES ACCESO A UN DESCUENTO ESPECIAL!");
}else   {
    alert ("LO SIENTO, NO TIENES ACCESO AL DESCUENTO ESPECIAL");
}
console.log(sueldo);