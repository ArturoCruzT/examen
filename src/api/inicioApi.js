import API from './axios';
import {
    cargando,
    ocultableDanger,
    cerrarAlert,
} from "../helpers/swalHelper";
import {trans} from "../services/lang.service";

export const iniciarSesion = ( correo, password) => {
    return API.post('inicioSesion', { correo , password:password  })
        .then(
            (res) => {
                cerrarAlert();
                return res.data;
            }
        ).catch((error) => {
            ocultableDanger(trans('general.errorAlCargar'), trans('general.error'));
            throw (error);
        });
};
