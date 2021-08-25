let namePerson = 'David';
let age = 20;
let height = 175;
let result = `Hola ${namePerson}, tu edad es de ${age} años.`;

if (height >= 180) {
    result += ` Eres una persona alta.`;
} else {
    result += ` Estatura baja o media.`;
}
alert(result);


const ifNormal = (nota) => {
    if (nota > 6) console.log("Pasaste")
    else console.log('Hummm dudoso')
}
ifNormal(7)

const operadorTernario = (nota) => {
    const res = (nota > 6) ? console.log('Pasaste') : console.log('Dudosa')
}
operadorTernario(4);