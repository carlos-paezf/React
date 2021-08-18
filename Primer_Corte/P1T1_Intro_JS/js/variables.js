let namePerson = "David Ferrer"
let newInner = `<h2>Caja de datos</h2> <h3>Su nombre es: ${namePerson}</h3>`;

let fragment = document.getElementById("root");

fragment.innerHTML += newInner;
