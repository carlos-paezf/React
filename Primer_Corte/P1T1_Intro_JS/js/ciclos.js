/*
const fragment = document.getElementById('root');

for (i = 0; i <= 10; i++){
    fragment.innerHTML += `${i}`;
}
*/


//! Buccle while
const bucleWhile = () => {
    let i = 0;
    while (i > 0) {
        console.log(`El valor del contador en el while es ${i}`);
        i++;
    }
}
bucleWhile();


//! Bucle do while
//?  A diferencia del While, si o si se ejecuta una vez
const bucleDoWhile = () => {
    let i = 0;
    do {
        console.log(`El valor del contador en el do-while es ${i}`);
    } while (i > 0);
}
bucleDoWhile();



//* Maneras de recorrer una array (Tiempos de ejecución)
//? Existen maneras de hacer ejecuciones rápidas.
const obj = {unArray: new Array(1000)};

const forBadPerfomane = () => {
    console.time("for bad");
    for (let i = 0; i < obj.unArray.length; i++) {
        obj.unArray[i] = "IFLRbad";
    }
    console.timeEnd("for bad");
}
forBadPerfomane();

const forGoodPerfomance = () => {
    console.time("for good");
    let arrayNuevo = obj.unArray;
    for (let i = 0, longitud = arrayNuevo.length; i < longitud; i++) {
        obj.unArray[i] = "IFLRgood";
    }
    console.timeEnd("for good");
}
forGoodPerfomance();


const conBucleForIn = () => {
    console.time("Con bucle for in");
    for (element in obj.unArray) {
        obj.unArray[element] = "IFLRForIn";
    }
    console.timeEnd("Con bucle for in");
}
conBucleForIn();


const conBucleForOf = () => {
    console.time("Con bucle for of");
    for (element of obj.unArray) {
        obj.unArray[element] = "IFLRForOf";
    }
    console.timeEnd("Con bucle for of");
}
conBucleForOf();


const conPrototypeForEach = () => {
    console.time("Con .forEach");
    obj.unArray.forEach((element) => {obj.unArray[element] = "IFLRForEach"})
    console.timeEnd("Con .forEach");
}
conPrototypeForEach();


const conMap = () => {
    console.time("Con map");
    obj.unArray.map((element) => {obj.unArray[element] = "IFLRMap"})
    console.timeEnd("Con map");
}
conMap();