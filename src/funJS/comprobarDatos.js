import { alertSweet } from '../funJS/alertSweet'


export const comprobarDatos = (obj)=>{
    const { email, email2 } = obj;

    for (const key in obj) {
        if (obj[key] === "") {
            alertSweet('Todos los campos del formulario deben de estar completos')
            return false;
        }
    }

    if (email !== email2) {
        alertSweet('Los campos "Email" y "Confirmar Email" deben de ser iguales')
        return false;
    }

    return true;
}