export function calc(op, data) {
    const { a, b } = { ...data };
    let resp;
    switch (op) {
        case 'sum':
            resp = `<p>La suma de ${a} y ${b} es ${+a + +b}</p>`;
            break;
        case 'sub':
            resp = `<p>La resta de ${a} y ${b} es ${a - b}</p>`;
            break;
        case 'mul':
            resp = `<p>El producto de ${a} y ${b} es ${a * b}</p>`;
            break;
        case 'div':
            resp = `<p>La división de ${a} y ${b} es ${a / b}</p>`;
            break;
        default:
            resp = '';
            break;
    }
    return resp;
}
