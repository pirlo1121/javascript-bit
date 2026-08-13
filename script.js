let datos = [
    {
        nombre: 'teclado',
        precio: 300
    },
    {
        nombre: 'mouse',
        precio: 10
    },
    {
        nombre: 'monitor',
        precio: 500
    },
    {
        nombre: 'cpu',
        precio: 1000
    },
];

let datos1 = [
    {
        nombre: 'teclado',
        precio: 300
    },
    {
        nombre: 'mouse',
        precio: 10
    },
    {
        nombre: 'monitor',
        precio: 5000
    },
    {
        nombre: 'cpu',
        precio: 1000
    },
];
let datos2 = [
    {
        nombre: 'teclado',
        precio: 300
    },
    {
        nombre: 'mouse',
        precio: 1200
    },
    {
        nombre: 'monitor',
        precio: 500
    },
    {
        nombre: 'cpu',
        precio: 1000
    },
];
obtenerPrecioMayor(datos);
obtenerPrecioMayor(datos1);
obtenerPrecioMayor(datos2)


function obtenerPrecioMayor(datos){

    let precioMayor = 0;
    let productoMayor = ''

    for(let i = 0; i<datos.length ; i++){
        if(datos[i].precio > precioMayor){
            precioMayor = datos[i].precio;
            productoMayor = datos[i].nombre
        }
    }
    console.log(`El producto más costoso es: ${productoMayor}
        con un precio de: ${precioMayor}$`);
}