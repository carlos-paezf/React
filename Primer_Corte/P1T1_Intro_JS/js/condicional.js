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
