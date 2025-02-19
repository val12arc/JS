



function buscarElemento(vector, elemento) {
    let cont = 0;

    while (cont<vector.length) {
        if (vector[cont] === elemento) {
            return cont;
        }
        cont++;
    }

    return null;
}

const numeros=[1,2,3,5,6,7];
console.log(buscarElemento(numeros,3));


function addElemento(vector, elemento) {
    if (vector.includes(elemento)) {
        return false;
    } else{
        vector[vector.length]=elemento;
        return true;
    }
}

const numeros2=[1,3,5,7,9,11];


console.log(addElemento(numeros2,10));



