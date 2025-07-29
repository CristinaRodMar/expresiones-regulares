import { comprobarFormato, comprobarValidez, mostrarNombreBanco, mostrarNumeroSucursal, mostrarDigitoControl, mostrarNumeroCuenta} from "./motor";

const cajaTexto = document.getElementById("cajaTexto");
const botonBuscar = document.getElementById("button");
const numeroBienFormado = document.getElementById("formado");
const numeroValido = document.getElementById("valido");
const nombreBanco = document.getElementById("banco");
const numeroSucursal = document.getElementById("sucursal");
const numeroControl = document.getElementById("numeroControl");
const numeroCuenta = document.getElementById("numeroCuenta");

export function iniciarUI() {
    if (botonBuscar && botonBuscar instanceof HTMLButtonElement){
        botonBuscar.addEventListener("click", () => {
        if ( cajaTexto && numeroBienFormado && cajaTexto instanceof HTMLInputElement) {
            const numeroIban = cajaTexto.value;
            analizarNumero(numeroIban);
        }
        });
    }
}

const analizarNumero = (numero: string) => {
    if (numeroBienFormado && numeroValido && nombreBanco && numeroSucursal && numeroControl && numeroCuenta ) {
        const mensajeBienFormado = comprobarFormato(numero);
        numeroBienFormado.innerHTML = mensajeBienFormado;

        const mensajeValidez = comprobarValidez(numero);
        if (mensajeValidez) {
        numeroValido.innerHTML = mensajeValidez;

        const mostrarBanco = mostrarNombreBanco(numero);
        nombreBanco.innerHTML = mostrarBanco;

        const mostrarSucursal = mostrarNumeroSucursal(numero);
        numeroSucursal.innerHTML = mostrarSucursal;

        const mostrarControl = mostrarDigitoControl(numero);
        numeroControl.innerHTML = mostrarControl;

        const mostrarCuenta = mostrarNumeroCuenta(numero);
        numeroCuenta.innerHTML = mostrarCuenta;
        }
    }
};