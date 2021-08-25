//* Función tipo CallBack
function arrayIteradoCallBack() {
    const a = [4, 6, 7, 8]
    console.time("=> ")
    a.forEach(function (value, index) {
        console.log('Posición: ' + index + ', Valor: ' + value)
    })
    console.timeEnd("=> ")
}
arrayIteradoCallBack()


//* Función tipo Arrow Function
const arrayIteradoArrowFunction = () => {
    const a = [1, 2, 3, 5]
    console.time("=> ")
    a.forEach((value, index) => console.log(`Posición: ${index}, Valor: ${value}`))
    console.timeEnd("=> ")
}    
arrayIteradoArrowFunction()


//* Recorrer un objeto (llave-valor) con forEach
const objKeyValue = () => {
    console.time("=> ")
    const libro = {
        titulo: 'Nombre del libro',
        autor: 'Autor del libro',
        numPaginas: 1/0,
        editorial: 'Editorial que publica',
        precio: 100.12
    }

    const propiedad = Object.getOwnPropertyNames(libro)

    propiedad.forEach(key => {
        let value = Object.getOwnPropertyDescriptor(libro, key).value
        console.log(`Propiedad: ${key}, Valor: ${value}`)
    })
    console.timeEnd("=> ")
}
objKeyValue()


//* Recorrer un objeto (llave-valor) con map
const objCarMap = () => {
    console.time("=> ")
    const car = {
        brand: 'Marca Anónima',
        color: 'Black',
        length: 3.5,
        width: 2,
        wheelsNumber: 5,
        doorsNumber: 5
    }
    Object.getOwnPropertyNames(car).map(key => {
        let value = Object.getOwnPropertyDescriptor(car, key).value
        console.log(`Propierty: ${key}, Description: ${value}`)
    })
    console.timeEnd("=> ")
}
objCarMap();


//* Recorrer un objeto (llave-valor) con for...in
const objCarForIn = () => {
    console.time("=> ")
    const car = {
        brand: 'Marca Anónima',
        color: 'Black',
        length: 3.5,
        width: 2,
        wheelsNumber: 5,
        doorsNumber: 5
    }
    for (const key in car) {
        if (Object.hasOwnProperty.call(car, key)) {
            const element = car[key];
            console.log(`Propiedad: ${key}, Valor: ${element}`)
        }
    }
    console.timeEnd("=> ")
}
objCarForIn()