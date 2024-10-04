// Variables y array
let resultado;
const operaciones = ['suma', 'resta', 'multiplicacion', 'division', 'porcentaje'];

// Elegit operacion
function elegirOpcion() {
    let continuar = true;

    while (continuar) {
        const operacion = prompt("Elige la operacion (suma, resta, multiplicacion, division, porcentaje) o escribe 'salir' para terminar:").toLowerCase();

        if (operacion === 'salir') {
            continuar = false;
            alert("Gracias por usar la calculadora");
            break;
        }

        if (!operaciones.includes(operacion)) {
            alert("Operacion no valida");
            continue;
        }

        const num1 = parseFloat(prompt("Ingresa el primer numero:"));
        const num2 = parseFloat(prompt("Ingresa el segundo numero:"));

        procesarOperacion(operacion, num1, num2);
    }
}

// Procesamiento d la operacion
function procesarOperacion(operacion, num1, num2) {
    switch (operacion) {
        case 'suma':
            resultado = sumar(num1, num2);
            break;
        case 'resta':
            resultado = restar(num1, num2);
            break;
        case 'multiplicacion':
            resultado = multiplicar(num1, num2);
            break;
        case 'division':
            resultado = dividir(num1, num2);
            break;
        case 'porcentaje':
            resultado = calcularPorcentaje(num1, num2);
            break;
        default:
            resultado = null;
            break;
    }

    alert(`El resultado de la ${operacion} es: ${resultado}`);
}


function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function calcularPorcentaje(a, b) {
    return (a * b) / 100;
}

elegirOpcion();
