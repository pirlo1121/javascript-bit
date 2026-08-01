// ============================================
// CONDICIONAL IF
// ============================================
// el bloque de codigo dentro del if solo se ejecuta si la condicion es true

let edad = 20;

if (edad >= 18) {
    console.log('eres mayor de edad');
}


// ============================================
// IF - ELSE
// ============================================
// else se ejecuta cuando la condicion del if es false

let edad2 = 15;

if (edad2 >= 18) {
    console.log('eres mayor de edad');
} else {
    console.log('eres menor de edad');
}


// ============================================
// IF - ELSE IF - ELSE
// ============================================
// permite evaluar varias condiciones en orden, una por una
// apenas una condicion se cumple, se ejecuta ese bloque y se ignoran los demas

let nota = 75;

if (nota >= 90) {
    console.log('tu calificacion es A');
} else if (nota >= 80) {
    console.log('tu calificacion es B');
} else if (nota >= 70) {
    console.log('tu calificacion es C');
} else {
    console.log('tu calificacion es F');
}


// ============================================
// EJEMPLO CON OPERADORES LOGICOS DENTRO DEL IF
// ============================================

let genero = 'M';
let edad3 = 20;

if (genero === 'M' && edad3 >= 18) {
    console.log('es un hombre mayor de edad');
} else if (genero === 'F' && edad3 >= 18) {
    console.log('es una mujer mayor de edad');
} else {
    console.log('es menor de edad');
}
