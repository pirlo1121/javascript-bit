// ============================================
// CICLO FOR (tradicional)
// ============================================
// repite un bloque de codigo una cantidad determinada de veces
// tiene 3 partes: inicializacion; condicion; incremento/decremento

// for (let i = 0; i < 5; i++)

// 1. let i = 0   => inicializa la variable de control (se ejecuta solo una vez)
// 2. i < 5       => condicion: el ciclo se repite MIENTRAS sea true
// 3. i++         => incrementa la variable al final de cada vuelta

for (let i = 0; i < 5; i++) {
    console.log(`iteracion ${i}`);
}
// imprime: iteracion 0, iteracion 1, iteracion 2, iteracion 3, iteracion 4


// ============================================
// FOR CON INCREMENTO DE MAS DE 1
// ============================================
// i += 2 avanza de dos en dos (pares)

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// imprime: 0, 2, 4, 6, 8, 10


// ============================================
// FOR DESCENDENTE (decremento)
// ============================================
// i-- va hacia atras

for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// imprime: 5, 4, 3, 2, 1


// ============================================
// FOR CON ACUMULADOR (suma)
// ============================================
// se usa una segunda variable para guardar un resultado acumulado

let suma = 0;

for (let i = 1; i <= 10; i++) {
    suma = suma + i;
}
console.log(`suma de 1 a 10 = ${suma}`); // = 55


// ============================================
// FOR + IF (numeros pares)
// ============================================
// se combinan un ciclo y un condicional dentro del bloque

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} es par`);
    }
}
// imprime: 2 es par, 4 es par, 6 es par, 8 es par, 10 es par