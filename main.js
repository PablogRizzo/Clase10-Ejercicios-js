// Ejercicio Nº1:  
// Crear una función que tome los años de una persona y retorne la edad en días

console.log("Ejercicio 1");

function edadEnDias(edad){
    return console.log(edad*365);
}

edadEnDias(10);
// Ejercicio Nº2:  
// Crear una función que tome horas y las convierta a segundos

console.log("Ejercicio 2");

function horasAsegundos(horas){
    return console.log(horas*3600);
}

horasAsegundos(2);
// Ejercicio Nº3:
// Crear una función que tome un array y devuelva un solo string de cada elemento separado por espacio.

console.log("Ejercicio 3");

function convertirArray(array){
    return array.join(" ");
}

let arr = ["Pera", "Manzana", "Banana", "Tomate"];

let cadena = convertirArray(arr);

console.log(cadena);
// Ejercicio Nº4:
// Crear una funcion que tome un array y lo invierta

console.log("Ejercicio 4");

function invertirArray(array){
    return array.reverse();
}

let arreglo = ["Auto","Avion","Barco","Camion"];

let invertido = invertirArray(arreglo);

console.log(invertido);


// Ejercicio Nº5:
// Crear una funcion que tome un array y lo invierta sin cambiar el original.

console.log("Ejercicio 5");

var arr1 = ["Juan","Pedro","Tomas","Pepito"];


function invertirArray2(array){
    var nuevo = [];
    for(i=array.length-1 ; i >= 0 ;i--){
        nuevo.push(array[i]);
    }
    return nuevo;
}

arr2 = invertirArray2(arr1);

console.log(arr1);
console.log(arr2);



