let notasMatematicas = [ 2,3,2,1,2 ];
let notasIngles = [ 5,4,4,4.8,2 ];
let notasSociales = [ 1,1,1,1,2 ];




function obtenerPromedio(notas){

    let sumaNotas = 0
    for(let i = 0 ; i< notas.length ; i++){
        sumaNotas += notas[i];
    }
    let promedio = (sumaNotas / notas.length).toFixed(1);
    console.log(`La nota final es: ${promedio}`);
}

obtenerPromedio(notasMatematicas);
obtenerPromedio(notasIngles);
obtenerPromedio(notasSociales);
obtenerPromedio([2,4,4,4]);