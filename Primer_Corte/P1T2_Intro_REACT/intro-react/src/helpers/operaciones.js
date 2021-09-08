export const helper = (numeros, setNumeros) => {
    const { n1, n2 } = numeros

    const handleChange = (e) => {
        setNumeros({
            ...numeros,
            [e.target.name]: parseFloat(e.target.value)
        })
    }

    const operacion = (op) => {
        let res
        switch (op) {
            case '+': res = n1 + n2; break;
            case '-': res = n1 - n2; break;
            case '*': res = n1 * n2; break;
            case '/': res = n1 / n2; break;
            default: break;
        }
        return res
    }
    return { handleChange, operacion, n1, n2}
}