//! Convertir a String

let valor_bool = true;
document.write(`Variable: valor_bool. Valor: ${valor_bool}. Tipo: ${typeof valor_bool} <br>`);

let valor_string = String(valor_bool);
document.write(`Variable: valor_string. Valor: ${valor_string}. Tipo: ${typeof valor_string} <br><br>`);


//! Convertir a Número

let num_str = '123';
document.write(`Variable: num_str. Valor: ${num_str}. Tipo: ${typeof num_str} <br>`);

let num = Number(num_str);
document.write(`Variable: num. Valor: ${num}. Tipo: ${typeof num} <br>`);

//? ... entero
let num_int = parseInt(num_str);
document.write(`Variable: num_int. Valor: ${num_int}. Tipo: ${typeof num_int} <br><br>`);

//? ... float en base 10
let num_str_dec = `${Math.PI}`;
document.write(`Variable: num_str_dec. Valor: ${num_str_dec}. Tipo: ${typeof num_str_dec} <br>`);

let num_float = parseFloat(num_str_dec, 10);
document.write(`Variable: num_float. Valor: ${num_float}. Tipo: ${typeof num_float} <br><br>`);

//? ... convertir a número sin casteo "evidente" (+variable)
let num_plus = +num_str;
document.write(`Variable: num_plus. Valor: ${num_plus}. Tipo: ${typeof num_plus} <br><br>`);


//! Convertir a Boolean
let str = "Hola mundo";
document.write(`Variable: str. Valor: ${str}. Tipo: ${typeof str} <br>`);

let bool = Boolean(num_str);
document.write(`Variable: bool. Valor: ${bool}. Tipo: ${typeof bool} <br><br>`);