import * as lang from '../lang/index';
import API from '../api/axios';
import {cargando, cerrarAlert, ocultableDanger} from "./swalHelper";

export const attemp = (correo, password) => {
    cargando();
    return API.post('iniciarSesion', {correo, password})
        .then((res) => {
            cerrarAlert();
            return res.data;
        }).catch((err) => {
            cerrarAlert();
            switch (err.response.status) {
                case 401:
                    ocultableDanger(lang.get('navbar.sinUsuarioAsignado'), lang.get('navbar.errorAuth'));
                    break;
                case 403:
                    ocultableDanger(lang.get('navbar.credencialesIncorrectas'), lang.get('navbar.errorAuth'));
                    break;
                case 500:
                default:
                    ocultableDanger(lang.get('navbar.errorDesconocido'), lang.get('navbar.errorAuth'));
                    break;
            }
            return err.response;
        });
};


export const creaSesion = () => {
    window.location.reload();
};

export const cerrarSesion = () => {

};

