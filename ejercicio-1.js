
const readline = require('node:readline');

const inpt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Calificacion_correspondiente = (calificacion) => {
    let letra;

    if (calificacion >= 90){
        return letra = "A";
    } else if (calificacion >= 70){
        return letra = "B";
    } else if (calificacion === 60 ) {
        return letra = "C";
    } else if (calificacion >= 40){
        return letra = "D";
    } else {
        return letra = "F";
    }

    
}

const CalcularPromedio = (calificaciones) => {
    let suma = 0;

    for (let i = 0; i < calificaciones.length; i++){
        suma += calificaciones[i];
        
    }

    

    return suma /= calificaciones.length;
}

let calificaciones = [];
let letras_calificaciones = [];

inpt.question('Ingrese la cantidad de nota que desea ingresar (0-100) : ', (cantidad_notas) => {
    cantidad_notas = parseInt(cantidad_notas);

    function pedirDatos(i){

        if (i >= cantidad_notas) {
            let promedio = CalcularPromedio(calificaciones);
            let letra_promedio = Calificacion_correspondiente(promedio);

            console.log('\n--- Calificaciones con su correspondiente letra ---');
            for (let j = 0; j < letras_calificaciones.length; j++){
                console.log(`${calificaciones[j]} - ${letras_calificaciones[j]}`);
            }

            console.log(`Promedio : ${promedio}\nLetra del promedio : ${letra_promedio}`);

            inpt.close();
        } else {
            inpt.question(`Ingrese la nota ${i+1} : `, (nota) => {
                nota = Number(nota);
                calificaciones[i] = nota;
                let letra = Calificacion_correspondiente(nota);
                letras_calificaciones[i] = letra

                pedirDatos(i + 1);
            });
        }

       

       
        
    
    }

    pedirDatos(0);

    

    
    
    
})
