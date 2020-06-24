import * as lang from '../lang/index';
import API from '../api/axios';
import {cargando, cerrarAlert, ocultableDanger} from "./swalHelper";
import {setLS} from "./localstorage";

export const attemp = (email, password) => {
    cargando();
    return API.post('inicioSesion', {email, password})
        .then((res) => {
            cerrarAlert();
            creaSesion();
            return res.data;
        }).catch((err) => {
            console.log(err)
            cerrarAlert();
            switch (err.response.status) {
                case 401:
                    ocultableDanger('Sin usuario','usuario');
                    break;
                case 403:
                    ocultableDanger('credenciales incorrectas', 'error de autenticacion');
                    break;
                case 500:
                default:
                    ocultableDanger('Error desconocido', 'Error de autenticacion');
                    break;
            }
            return err.response;
        });
};


export const creaSesion = () => {
    return API.post('getUser')
        .then((res) => {
            console.log(res);
          setLS('user', res);
        }).catch((err) => {
            console.log(err)
            cerrarAlert();
        });

};

export const cerrarSesion = () => {

};

