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

// Ejercicio Nº6:
// Crear una función que concatene 2 arrays

console.log("Ejercicio 6");

let primero = ["Hola","como"];
let segundo = ["estas","?"];

function conectar(array1,array2){
    for(let i = 0; i < array2.length ; i++){
        array1.push(array2[i]);
    }
    return array1;
}

conectar(primero,segundo);

console.log(primero);

// Ejercicio Nº7:
//  Crear una función que retorne true si un array contiene un elemento

console.log("Ejercicio 7");

function contiene(array,elemento){
    for(let i=0; i < array.length ; i++){
        if(array[i] == elemento){
            return true;
        }
    }
    return false;
}

let cosas = ["trompeta",2,"pasto","tijera"];

console.log(contiene(cosas,2));
console.log(contiene(cosas,"pasto"));
console.log(contiene(cosas,5));
console.log(contiene(cosas,"jorge"));

// Ejercicio Nº8
// Crear una función que te diga si el ultimo caracter de un string es una b

console.log("Ejercicio 8");

function ultimoCaracter(string){
    let array = string.split("");
    if(array[array.length-1] == "b"){
        return true;
    }
    return false;
}

console.log(ultimoCaracter("Hola"));

console.log(ultimoCaracter("Hola b"));

// Ejercicio Nº9
// Crear una función que tome un string y cree uno nuevo utilizando las 3 primeras y ultimas letras,

console.log("Ejercicio 9");

function crear(string){
    let array = string.split("");
    let nuevo = [];
    let nuevo2 = [];

    for(i = 0;i < 3 ; i++){
        nuevo.push(array[i]);
    }

    for(j = array.length ;j > array.length-4 ; j--){
        nuevo2.push(array[j]);
    }

    nuevo2.reverse();
    conectar(nuevo,nuevo2);
    let nuevoString = nuevo.join("");
    console.log(nuevoString);
}

crear("HolaJuanCarlos");
crear("Argentina");
crear("auto");

// comprobar que el string de parametro mida al menos 6 caracteres


console.log("Ejercicio 10");

function comprobar(string){
    let array = string.split("");
    if(array.length>=6){
        console.log("Mide al menos 6 caracteres");
    }else{
        console.log("Mide menos de 6 caracteres");
    }
}

comprobar("Termotanque");
comprobar("pc");

// Ejercicio Nº10
// Crear una función que tome dos strings y los concatene sin las primeras 2 letras


console.log("Ejercicio 11");

function concat(string1,string2){
    let uno = string1.split("");
    let dos = string2.split("");
    for(i=0;i<2;i++){
        uno.shift();
        dos.shift();
    }

    let tres = conectar(uno,dos);

    console.log(tres.join(""));
}

concat("jose","moto");
concat("bigote","pokemon");

// Ejercicio Nº11
// Comprobar entre dos valores cual es mas cercano al 100

console.log("Ejercicio 12");

function cercano(num1,num2){
    if(num1-100 > num2-100)
    {
        console.log(num1 + " es mas cercano a 100");
    }else if(num1-100 < num2-100){
        console.log(num2 + " es mas cercano a 100");
    }else{
        console.log("son iguales");
    }
}

cercano(80,70);
cercano(101,80);
cercano(50,50);
cercano(-1,-8);


