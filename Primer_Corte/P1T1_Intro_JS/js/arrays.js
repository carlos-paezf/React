const names = ['Carlos', 'David', 'Páez', 'Ferreira'];
const div = document.getElementById('root');

for (i = 0; i < names.length; i++){
    div.innerHTML += `${i}. Hola ${names[i]} <br>`;
}

document.write("<br>");
names.forEach((name) => div.innerHTML += `Nombre: ${name}<br>`);

document.write("<br>");
names.map((name) => div.innerHTML += `${name}<br>`);