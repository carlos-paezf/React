/*
Crear una calculadora básica que tenga 2 casillas de texto (num1, num2) 
y 4 botones que realicen operaciones aritméticas básicas.
*/

const operacion = (operacion) => {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let res = 0;
    switch (operacion) {
        case 'suma': res = a + b; break;
        case 'resta': res = a - b; break;
        case 'multiplicacion': res = a * b; break;
        case 'division': res = a / b; break;
    }
    document.getElementById('resultado').textContent = `${res}`;
}


document.getElementById('suma').onclick = () => operacion("suma");
document.getElementById('resta').onclick = () => operacion("resta");
document.getElementById('multiplicacion').onclick = () => operacion("multiplicacion");
document.getElementById('division').onclick = () => operacion("division");