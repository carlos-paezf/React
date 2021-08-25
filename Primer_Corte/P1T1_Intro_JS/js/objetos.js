const objetos = () => {
    /* let variable = "Saludos"
    console.log(variable)

    let str = new String("Saludos")
    console.log(str)

    const b1 = {}
    console.log(b1)

    const b2 = new Object()
    console.log(b2) */

    const parejaKeyValue = {
        nombre: 'David',
        apellido: 'Ferrer',
        edad: 20,
        estudiante: true,
        pasatiempo: [
            'Comer', 
            'Dormir', 
            'Descansar'
        ],
        contacto: {
            correo: 'correo@email.com',
            celular: 12345,
            direccion: 'En la Casa'
        },
        saludar: function() {
            console.log('Función dentro de un objeto')
        },
        mostrarNombre: function() {
            console.log(`Nombre: ${this.nombre} ${this.apellido}`)
        },
        mostrarContacto: function() {
            console.log(`Correo: ${this.contacto.correo}, Celular: ${this.contacto.celular}`)
        }
    }
    /* console.log(parejaKeyValue)
    console.log(parejaKeyValue.nombre)
    console.log(parejaKeyValue.estudiante)
    console.log(`Pasatiempo 0: ${parejaKeyValue.pasatiempo[0]}`)
    console.log(`Todos los Pasatiempos: ${
        parejaKeyValue.pasatiempo.map((e, index) => `\n  ${index+1}. ${e}`)
    }`)
    console.log(parejaKeyValue['saludar'])
    console.log(parejaKeyValue.contacto.celular)
    parejaKeyValue.saludar()
    parejaKeyValue.mostrarContacto()
    console.log('\n\n') */
    

    Object.getOwnPropertyNames(parejaKeyValue).forEach(key => {
        let value = Object.getOwnPropertyDescriptor(parejaKeyValue, key).value
        console.log(`Propiedad: ${key}, Valor: ${value}`)
    })
    console.log('\n\n')


    Object.getOwnPropertyNames(parejaKeyValue).forEach(key => {
        let value = Object.getOwnPropertyDescriptor(parejaKeyValue, key).value
        if (value instanceof Array) {
            value.map((e) => `${key[e]}`)
        }
        if (value instanceof Object) {
            Object.getOwnPropertyNames(value).forEach(key => {
                if(key == "name" || key == "length" || key == "prototype") return
                console.log(`Propiedad: ${key}, Valor: ${value}`)
            })
        }
        console.log(`Propiedad: ${key}, Valor: ${value}`)
    })
    console.log('\n\n')


    /* const arr = parejaKeyValue.pasatiempo
    Object.getOwnPropertyNames(arr).forEach(function(key) {
        let value = Object.getOwnPropertyDescriptor(arr, key).value
        console.log(`Propiedad: ${key}, Valor: ${value}`)
    })
    console.log('\n\n')


    parejaKeyValue.pasatiempo.forEach(function(e, index){
        console.log(`${index}. ${e}`)
    })
    console.log('\n\n')


    const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
    const valArr = Object.values(parejaKeyValue)
    console.log(deepFlatten(valArr)) */
}
objetos()