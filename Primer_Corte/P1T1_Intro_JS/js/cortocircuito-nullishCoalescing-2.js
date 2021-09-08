const prueba = () => {
    console.log(undefined && 'Carro')   // undefined
    console.log(null && 'Carro')        // null
    console.log(false && 'Carro')       // false
    console.log(true && 'Carro')        // Carro
    console.log(false || 'Valor false') // Valor false
}
prueba()


const arreglo = () => {
    const carros = [
        'Alfa Romeo',
        'Audi',
        'Ferrari',
        'Ford',
        'Kia',
        'Mazda',
    ]
    const longitud = carros.length
    const test = undefined
    console.log((longitud == 6) && "El tamaño del arreglo es de 6")
    console.log(test || 'Es una variable que aplica el operador ||')
}
arreglo()


/* Elaborar una función en la cual le envíen por parámetro los diferentes 
valores para poder realizar una suma y validación con operador corto circuito */
const n = null

const suma_v1 = (a, b) => {
    console.log(a && b ? a + b : 0)
}
suma_v1(1, 3)  // 4
suma_v1()      // 0
suma_v1(1)     // 0
suma_v1(n, n)  // 0
suma_v1(n)     // 0

const suma_v2 = (a, b) => {
    console.log(a && b && a+b)
}
suma_v2(3, 4)  // 7
suma_v2()      // undefined
suma_v2(2)     // undefined
suma_v2(n, n)  // null
suma_v2(n)     // null

const suma_v3 = (a, b) => {
    a = a || 0
    b = b || 0
    console.log(a+b)
}
suma_v3(6, 8)  // 14
suma_v3()      // 0
suma_v3(3)     // 3
suma_v3(n, n)  // 0
suma_v3(n)     // 0

const suma_v4 = (a = 0, b = 0) => {
    console.log(a + b)
}
suma_v4(2, 8)  // 10
suma_v4()      // 0
suma_v4(3)     // 3
suma_v4(n, n)  // 0
suma_v4(n)     // 0



//? Optional Chaining

/* Esta función funciona a la perfección, pero que pasa si recibe valores nulos un objeto? */
const pension = () => {
    const edadPersonas = [70, 40, 80, 99, 76, 66, 98, 88]
    const pagarPension = edadPersonas.filter(edad => edad >= 70)
    console.log(pagarPension)
}
pension()


const carro = () => {
    const carro = {
        marca: 'kia',
        ruedas: 4,
    }
    console.log(carro?.motor?.serie)
}
carro()
