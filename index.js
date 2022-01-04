/*function miprimera() {
console.log ("arroz")

console.log("leche")
return 20;
console.log("azucar")

return "retorna lo que yo quiero";
    
}

let impfunction = miprimera();



console.log (impfunction)

/*const mifuncion = function () {
    console.log("Mi funcion anonima ya declarada")
    
}

mifuncion(); */

/*try {
    console.log("En el try se agrega el codigo a evaluar")
} catch (error) {
    console.log("Capturamos el error surgido en el try")
} finally{
    console.log("Este bloque se ejecutara siempre al final try-catch")
}*/

/*const num1 = [1,2,3,4,5],
        num2 = [6,7,8,9,0]

        console.log(num1,num2)
 
const num3 = [...num1,...num2]
console.log(num3)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");*/



/*const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits[fruits.length] = "Kiwi";
fruits[fruits.length] = "pera";

 delete fruits
 

console.log(fruits);*/



const colores = ['blanco','negro','azul','rojo'];

//Sin arrow function

/*colores.forEach(function(color){
    console.log(color)
});*/


//Con arrow function

/*colores.forEach((color) => {
    console.log(color)
});*/


//Arrow function mas reducido

/*colores.forEach(color => {
    console.log(color)
});*/


//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    for (let i = 0; i < numeros.length; i++); {
      console.log(numeros[i]);
}