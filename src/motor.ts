import { bancos } from "./modelo";

const regex = /^(?<codigoPais>([A-Z]{2}\d{2}))([\s-])?(?<digitoControl>(\d{4}))([\s-])?(?<codigoBanco>(\d{4}))([\s-])?(?<codigoSucursal>(\d{2}))([\s-])?(?<numeroCuenta>(\d{10}))$/;

export const comprobarFormato = (numero: string) => {
    const coincidencia = regex.test(numero);
    let mensaje = "";
    if (coincidencia) {
        mensaje = "El IBAN está bien formado";
    } else {
        mensaje = "El IBAN no está bien formado";
    }
return mensaje;
};

export const comprobarValidez = (numero: string) => {
    const coincidencia = regex.exec(numero);
    let mensaje = "El IBAN no es válido";
    if (coincidencia) {
        const { codigoBanco } = coincidencia.groups as any;
        const bancoEncontrado = bancos.find((banco) => banco.includes(codigoBanco));
    if (bancoEncontrado) {
        mensaje = "EL IBAN es válido";
        }
    }
return mensaje;
};

    export const mostrarNombreBanco = (numero: string) => {
    const coincidencia = regex.exec(numero);
    let mensaje = "No se encuentra ningún banco coincidente";

    if (coincidencia) {
        const { codigoBanco } = coincidencia.groups as any;
        const bancoEncontrado = bancos.find((banco) => banco.includes(codigoBanco));
    if (bancoEncontrado) {
        const banco = bancoEncontrado.split(" ").slice(1).join(" ");
        mensaje = "Banco: " + banco;
    }
    }
return mensaje;
};

export const mostrarNumeroSucursal = (numero: string) => {
    const sucursalValida = regex.test(numero);
    let mensaje = "No se encuentra ninguna sucursal coincidente";

    if (sucursalValida) {
        const coincidencia = regex.exec(numero);
    if (coincidencia) {
        const { codigoSucursal } = coincidencia.groups as any;
        const numeroSucursal = codigoSucursal;
        mensaje = "Código sucursal: " + numeroSucursal;
    }
}
return mensaje;
};

export const mostrarDigitoControl = (numero: string) => {
    const valido = regex.test(numero);
    let mensaje = "Error con el digito de control";

    if (valido) {
        const coincidencia = regex.exec(numero);
    if (coincidencia) {
        const { digitoControl } = coincidencia.groups as any;
        const numeroDeControl = digitoControl;
        mensaje = "Digito de control: " + numeroDeControl;
        }
    }
return mensaje;
};

export const mostrarNumeroCuenta = (numero: string) => {
    const valido = regex.test(numero);
    let mensaje = "Error con el numero de cuenta";

    if (valido) {
        const coincidencia = regex.exec(numero);
    if (coincidencia) {
        const { numeroCuenta } = coincidencia.groups as any;
        const cuenta = numeroCuenta;
        mensaje = "Numero de cuenta: " + cuenta;
        }
    }
return mensaje;
};