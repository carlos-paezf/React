/* //! Operador Ternario ( ? : )
const edad = 10
let res = (edad < 18) 
    ? console.log(`Eres menor de edad`) 
    : console.log(`Eres mayor`)

let pienso = false
let res = pienso 
    ? console.log("... luego pienso")
    : console.log("....hum")


//? If tradicional
if (pienso) {
    console.log(`... luego existo`)
}

let res = pienso 
    ? console.log("... luego pienso")
    : null


//? Cortocircuito
let respuesta = (pienso === true) && console.log("... luego existo...") */


//! Operador Cortocircuito && (condición es TRUE)
const frutas = [
    "Manzana",
    "Pera",
    "Limon",
    "Banana"
]
const longitud = frutas.length

console.log(longitud === 4 && "Tengo 4 frutas")

console.log(longitud > 10 && "La cantidad es menor a 10 frutas")


//! Operador Cortocircuito || (condición sea FALSE, Undefined, null)
console.log(longitud > 10 || "Tengo menos de 10 frutas")



const exampleCortocircuito = (edad) => {
    //console.log(edad < 18 && "Menor de edad")
    //edad < 18 && console.log("Menor de edad")
    edad < 18 || console.log("UD es mayor de edad")
}
/* exampleCortocircuito(2)   // ...
exampleCortocircuito(20)  // "UD es mayor de edad"
exampleCortocircuito(18)  // "UD es mayor de edad" 
exampleCortocircuito()    // "UD es mayor de edad"
exampleCortocircuito("Hola")    // "UD es mayor de edad"
*/


/* 
 * Por pendejos recorrimos mal el arreglo, en vez de undefined quiero mostrar, 
 * "Estoy pendejo" en cada iteracion 
*/
frutas.forEach((element) => {
    frutas[element] || console.log("Estoy pendejo")
})


//! Nullish coalescing operator ?? (Condiciones que sean Undefined o null)
/* 
 * Por pendejos recorrimos mal el arreglo, en vez de undefined quiero mostrar, 
 * "Estoy pendejo" en cada iteracion 
*/
frutas.forEach((element) => {
    frutas[element] ?? console.log("Estoy pendejo")
})



const carros = [
    "Mazda",
    "Alfa Romero",
    "Fiat",
    "Ferrari",
    "Renault"
]

/* carros.forEach((element, index) => {
    console.log(`${index}. ${element}`)
});

carros.map((element, index) => {
    console.log(`${index}. ${element}`)
}); */

/* for (let i = 0; i < carros.length; i++) {
    const element = carros[i];
    console.log(`${i}. ${element}`)
} */

/* carros.map((e, i) => {
    i % 2 == 0 && console.log(`${i}. ${e}`)
})

carros.map((e, i) => {
    i % 2 == 0 || console.log(`${i}. ${e}`)
}) */

/* for (let i = 0; i < carros.length; i++) {
    const element = carros[i];
    i % 2 != 0 && console.log(`${i}. ${element}`)
}
 */


// Usando foreach con operador || y que imprima los indices pares
carros.forEach((element, index) => {
    index % 2 != 0 || console.log(`${index}. ${element}`)
})