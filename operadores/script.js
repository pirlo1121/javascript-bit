// ============================================
// OPERADORES ARITMETICOS
// ============================================
// sirven para hacer operaciones matematicas entre numeros

console.log(10 + 22); // suma        => 32
console.log(12 - 22); // resta       => -10
console.log(10 * 22); // multiplicacion => 220
console.log(60 / 4);  // division    => 15
console.log(10 % 3);  // modulo (residuo de la division) => 1
console.log(2 ** 3);  // potencia (2 elevado a 3) => 8


// ============================================
// OPERADORES DE COMPARACION
// ============================================
// sirven para comparar dos valores, siempre devuelven true o false

console.log('qwerty' == 'qwerty');  // == compara solo el VALOR         => true
console.log(23 === '23');           // === compara VALOR y TIPO de dato => false (number vs string)
console.log(23 === 23);             // === con mismo tipo y valor       => true

console.log(25 > 18);   // mayor que        => true
console.log(30 >= 31);  // mayor o igual que => false
console.log(30 < 31);   // menor que        => true
console.log(30 <= 31);  // menor o igual que => true

console.log('qwerty' != 'qwerty8'); // != diferente en VALOR              => true
console.log(23 !== '23');           // !== diferente en VALOR o en TIPO   => true


// ============================================
// OPERADORES LOGICOS
// ============================================
// sirven para combinar o negar condiciones (trabajan con booleanos)

let genero = 'M';
let edad = 17;

// && (AND) => true solo si AMBAS condiciones son verdaderas
let esHombreYMayor = (genero === 'M' && edad >= 18);
console.log(`esHombreYMayor = ${esHombreYMayor}`); // false, porque edad no es >= 18

// || (OR) => true si AL MENOS UNA condicion es verdadera
let permiso = (genero === 'M' || edad >= 18);
console.log(`permiso = ${permiso}`); // true, porque genero === 'M' se cumple
console.log('permiso = ' + permiso);

// ! (NOT) => invierte el valor booleano
console.log(!(40 < 50)); // 40 < 50 es true, al negarlo queda => false
console.log(!permiso);   // niega el valor de la variable permiso
