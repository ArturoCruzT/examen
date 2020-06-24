import API from './axios';
import {
    ocultableDanger,
    guardadoCorrecto, cargando, cerrarAlert
} from "../helpers/swalHelper";
import {trans} from "../services/lang.service";


export const guardarFoto = (usuario_id, file, msg_cargando) => {
    var formData = new FormData();
    formData.append(`documentos[${0}]`, file);
    formData.append('usuario_id', usuario_id);
    return fetch(`${process.env.REACT_APP_URL_API}/documentos/guardarFotoEmpleado`, {
        method: 'POST',
        mode: 'cors',
        body: formData,
    })
        .then(
            (res) => {
                guardadoCorrecto();
                return res.data;
            }
        ).catch((error) => {
                ocultableDanger(error.mensaje, trans('general.error'));
                throw (error);
        });
};

export const guardarCv = (usuario_id, file, msg_cargando) => {
    var formData = new FormData();
    formData.append(`documentos[${0}]`, file);
    formData.append('usuario_id', usuario_id);
    return fetch(`${process.env.REACT_APP_URL_API}/documentos/guardarCvEmpleado`, {
        method: 'POST',
        mode: 'cors',
        body: formData,
    })
        .then(
            (res) => {
                guardadoCorrecto();
                return res.data;
            }
        ).catch((error) => {
            ocultableDanger(error.mensaje, trans('general.error'));
            throw (error);
        });
};

export const eliminarAdjunto = (documento_id, msg_cargando = true) => {
    if (msg_cargando)
        cargando();
    return API.post('documentos/eliminarDocumento', { 'documento_id': documento_id })
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