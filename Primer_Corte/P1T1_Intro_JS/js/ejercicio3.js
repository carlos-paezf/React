/**
 * Crear una lista <ul> y <ol> con 5 nombres con <li> y usar template string
 */

const nombres = ["Pepe", "Pancho", "Lucas" , "Juan", "Martin"]

document.write("<ul>");
for (i = 0; i < nombres.length; i++) {
    document.write(`<li> ${nombres[i]} </li>`);
}
document.write("</ul>");

document.write("<ol>");
nombres.map((nombre) => document.write(`<li> ${nombre} </li>`));
document.write("</ol>");