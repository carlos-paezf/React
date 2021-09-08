/* Hacer la calculadora de los ejercicios anteriores, pero aplicando
el concepto de nullish coalescing, y sin tener valores por defecto */

const calculadora = (op, a, b) => {
    op = op ?? '+'
    a = a ?? 0
    b = b ?? 0
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

calculadora(null, null, 2);
