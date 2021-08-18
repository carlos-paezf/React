/* 
Cambiar los botones de la calculadora (ejercicio1) por una lista desplegable
*/

const operation = (operation) => {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let res = 0;
    switch (operation) {
        case 'suma': res = a + b; break;
        case 'resta': res = a - b; break;
        case 'multiplicacion': res = a * b; break;
        case 'division': res = a / b; break;
    }    
    document.getElementById('resultado').textContent = `${res}`;
}    

const select = document.getElementById('operaciones');

const options = () => {
    let option = select.options[select.selectedIndex].text;
    switch (option.toLowerCase()) {
        case 'sumar': operation('suma'); break;
        case 'restar': operation('resta'); break;
        case 'multiplicar': operation('multiplicacion'); break;
        case 'dividir': operation('division'); break;
    }
}

select.addEventListener(
    'change',
    options
)

select.addEventListener(
    'click',
    options
)
