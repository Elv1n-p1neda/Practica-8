
const readline = require('node:readline');

const inpt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const CantidadVocales = (texto) => {
    texto = texto.toLowerCase();
    const vocales = ["a", "e", "i", "o", "u", "à", "è", "ì", "ò", "ù"];

    let total_vocales = 0;

    for (let i = 0; i < texto.length; i++){
        
        if (vocales.includes(texto[i])){
            total_vocales += 1;
        }
    }

    return total_vocales;
}

const TextoInvertido = (texto) => {
    let textoInvertido = '';

    for (let i = texto.length - 1; i >= 0; i--){
        textoInvertido += texto[i];
    }

    return textoInvertido;
}

const TextoPalindromo = (texto) => {

    texto = texto.toLowerCase().replace(/ /g, "");

    let letra_inverta = TextoInvertido(texto);


    if (texto.toLowerCase() === letra_inverta.toLowerCase()){
        return true
    } else {
        return false
    }
}

inpt.question('Ingrese una palabra o frase : ', (texto) => {

    if (texto.trim().length === 0) console.log('Por favor, ingrese un dato valido'); return inpt.close();

    let EsPalindromo = TextoPalindromo(texto);

    console.log(`Texto o Frase : ${texto}\n-----------------------`);
    if (EsPalindromo){
        console.log(`Cantidad de vocales : ${CantidadVocales(texto)}\nCadena Invertida : ${TextoInvertido(texto)}\nPalindromo : Si`);
    } else {
        console.log(`Cantidad de vocales : ${CantidadVocales(texto)}\nCadena Invertida : ${TextoInvertido(texto)}\nPalindromo : No`);
    }

    inpt.close();
})

