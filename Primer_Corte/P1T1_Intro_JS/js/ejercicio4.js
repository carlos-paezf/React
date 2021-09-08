/* Hacer una calculadora que use valores por defecto, 
operadores de cortocircuito y ternario */

const calculadora = (op, a = 0, b = 0) => {
    let res;
    switch (op) {
        case '+': res = a && b ? a + b : 0; break;
        case '-': res = a && b && a - b; break;
        case '*': res = a && b && a * b; break;
        case '/': res = a && b ? a / b : 0; break;
        default: break;
    }
    console.log(res)
}

calculadora('+', 10);


/* const calculadora = (op, a = 0, b = 0) => {
    op = op || '+'
    a = a && a
    b = b && b
    let res;
    switch (op) {
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/': res = a / b; break;
        default: break;
    }
    console.log(res)
}

calculadora(null, 10, 29); */