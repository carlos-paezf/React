//? Función tradicional
function greeting(name) {
    console.log("Hello " + name);
}
greeting("David");


//? Arrow function
const hola = (name) => `Hello ${name}`;
const result = hola("David Ferrer");
console.log(result)


//* Sumar 2 números
const multiply = (a, b) => a * b;
console.log(multiply(10, 2));


//* Alert
setTimeout(() => alert("Han pasado 5 segundos"), 5000);