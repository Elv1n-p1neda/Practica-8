
const readline = require('node:readline');

const inpt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const CalcularAreaCirculo = (radio) => {
    let area = 3.14 * radio**2;

    return area;
}

const CalcularPerimetroCirculo = (diametro) => {
    let perimetro = 3.14 * diametro;

    return perimetro;
}

const CalcularAreaCuadrado = (lados) => {
    let area = lados**2;

    return area;
}

const CalcularPerimetroCuadrado = (lado) => {
    let perimetro = 4 * lado;

    return perimetro;
}

const CalcularAreaRectangulo = (altura, base) => {
    let area = base * altura;

    return area;
}

const CalcularPerimetroRectangulo = (altura, base) => {
    let perimetro = 2 * (base + altura);

    return perimetro;
}

const CalcularAreaTriangulo = (base, altura) => {
    let area = (base * altura) / 2;

    return area;
}

const CalcularPerimetroTriangulo = (lado1, lado2, lado3) => {
    let perimetro = lado1 + lado2 + lado3;

    return perimetro;
}

inpt.question('Seleccione una opcion : ', (opcion) => {
    opcion = parseInt(opcion);

    switch (opcion) {
        case 1:
            console.log('-- Calcular Area de un Circulo --\n');
            inpt.question('Ingrese radio del circulo : ', (radio) => {
                radio = Number(radio);

                let area = CalcularAreaCirculo(radio);
                console.log('-- Calcular Perimetro de Un Circulo --\n');
                inpt.question('Ingrese el diametro del circulo : ', (diametro) => {
                    diametro = Number(diametro);
                    let perimetro = CalcularPerimetroCirculo(diametro);

                    console.log('\n-- Resultados --');

                    console.log(`Area : ${area.toFixed(2)}\nPerimetro : ${perimetro.toFixed(2)}`);

                    inpt.close();
                })
            })
            break;

        case 2:
            console.log('-- Calcular Area y Perimetro de Un Cuadrado --\n');
            inpt.question('Ingrese el valor de unos de los lado del cuadrado : ', (lado) => {
                lado = Number(lado);

                let area = CalcularAreaCuadrado(lado);

                let perimetro = CalcularPerimetroCuadrado(lado);

                console.log('\n-- Resultados --');

                console.log(`Area : ${area.toFixed(2)}\nPerimetro : ${perimetro.toFixed(2)}`);

                inpt.close();
                
            })
            break;

        case 3:
            console.log('-- Calcular Area y Perimetro de Un Rectangulo --\n');
            inpt.question('Ingrese la altura del rectangulo : ', (altura) => {
                altura = Number(altura);

                
                inpt.question('Ingrese la base del rectangulo : ', (base) => {
                    base = Number(base);
                    let area = CalcularAreaRectangulo(altura, base);
                    let perimetro = CalcularPerimetroRectangulo(altura, base);

                    console.log('\n-- Resultados --');
                    console.log(`Area : ${area.toFixed(2)}\nPerimetro : ${perimetro.toFixed(2)}`);

                    inpt.close();
                })
            })
            break;

        case 4:
            console.log('-- Calcular Area de Un Triangulo --\n');     
            inpt.question('Ingrese la altura del triangulo : ', (altura) => {
                altura = Number(altura);

                
                inpt.question('Ingrese la base del triangulo : ', (base) => {
                    base = Number(base);
                    let area = CalcularAreaTriangulo(altura, base);
                    
                    console.log('-- Calcular Perimetro de Un Triangulo --\n');
                    inpt.question('Ingrese el valor del lado 1 del triangulo : ', (lado1) => {
                        inpt.question('Ingrese el valor del lado 2 del triangulo : ', (lado2) => {
                            inpt.question('Ingrese el valor del lado 3 del triangulo : ', (lado3) => {
                                let perimetro = CalcularPerimetroTriangulo(Number(lado1), Number(lado2), Number(lado3));

                                console.log('\n-- Resultados --');

                                console.log(`Area : ${area.toFixed(2)}\nPerimetro : ${perimetro.toFixed(2)}`);

                                inpt.close();
                            })
                        })
                    })
                })
            })
            break;

        default:
            console.log('Opcion no valida');
            break;
    }

})
