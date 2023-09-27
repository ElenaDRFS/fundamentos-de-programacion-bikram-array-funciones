let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

function suma(num1,num2){
    return num1 + num2;
} 
suma(52,36);

function potenciacion(a,b){
    return Math.pow(a,b);
}
potenciacion(10,0);

function separarPalabras(string){
    return string.split(" "); 

}

function repetirString(string,num){
    
}


// es primo si se divide entre él mismo y u1
// no es primo si da resto cero con cualquier otro número
function esPrimo(num){ 
    // he buscado la solución pero no la entiendo


 }

function pintarArray(array){
    let resultado = array.toString();
    return resultado;

}

function arrayMapi(array, funct){
    let resultado = array.map(funct);
    return resultado;
}


let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

let holaMundo = [ 'Hola', 'Mundo'];

let loGuardoTodo = ['hola', 'que', 'tal', 23, 42.33]

let arraysDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

function multiplicacion(num1,num2){
    let resultado = num1 * num2;
    return resultado;

}

function division(num1,num2){
    let resultado = num1 / num2;
    return resultado;
}


//me asalta la duda de cual es la solución para escribirlo sin con la variable o sin ella.
function esPar(num){
    let queEs = num;
    if (num % 2 === 0){
        return true;
    }else{
        return false;
    }
return queEs;
} 

function esPar(num){
    if (num % 2 === 0){
        return true;
    }else{
        return false;
    }

} 


let arrayFunciones = [suma(num1,num2), resta(num1,num2), multiplicacion(num1,num2)];

// function(a,b){a-b} ordena de menor a mayor
//function(a,b){b-a} ordena de mayor a menor 
function ordenarArray2(array){
    let arrayOrdenado = array.sort(function(a,b){
        return b-a;
    });

return arrayOrdenado;   
}

function obtenerImpares(array){
    let arrayImpares = [];
    for(i = 0; i < array.length; i++){
        if(i % 2 !== 0){
         arrayImpares.push(array[i]);
        }
        
    }
    return arrayImpares;
}

