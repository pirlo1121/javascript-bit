// ============================================
// TIPOS DE DATOS PRIMITIVOS
// ============================================

// String (texto) => se puede escribir con comillas simples, dobles o backticks
console.log('hello world');
console.log("hello world");
console.log(`hello world`); // backticks permiten interpolar variables: `hola ${nombre}`

// Number (numeros) => enteros y decimales, positivos y negativos
console.log(55);
console.log(12.5);
console.log(-8);

// Boolean (booleanos) => solo puede ser true o false
console.log(true);
console.log(false);


// ============================================
// DECLARACION DE VARIABLES: var, let, const
// ============================================

// let => se usa cuando el valor SI va a cambiar
let numero = 21;
numero = 78; // se puede reasignar
console.log(numero); // 78

// let sin valor inicial => queda "undefined" hasta que se le asigne algo
let numero1;
console.log(numero1); // undefined
numero1 = 100;
console.log(numero1); // 100

// const => se usa cuando el valor NO va a cambiar
const nombre = 'maria';
// nombre = 'juan'; // ❌ Error: no se puede reasignar una const

// var => forma antigua de declarar variables (evitar usarla, let y const la reemplazan)
var registroViejo = true;


// ============================================
// REASIGNACION Y COPIA DE VALORES
// ============================================

let registro = false;

// al asignar una variable a otra, se copia el valor que tenia en ese momento
let nombre2 = nombre;
console.log(nombre2); // 'maria'


// ============================================
// typeof => nos dice el tipo de dato de una variable
// ============================================

console.log(typeof numero);   // 'number'
console.log(typeof nombre);   // 'string'
console.log(typeof registro); // 'boolean'
console.log(typeof numero1);  // 'number' (porque ya tiene un valor asignado)


// ============================================
// BUENAS PRACTICAS
// ============================================

// 1) Nunca usar var en codigo nuevo
// 2) Los nombres de variables van en camelCase => miVariable, nombreCompleto
const miVariable = 'ejemplo';
const nombreCompleto = 'Shakira Lopez';
