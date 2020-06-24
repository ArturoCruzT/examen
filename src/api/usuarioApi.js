import API from './axios';
import {
    cargando,
    ocultableDanger,
    guardadoCorrecto,
    cerrarAlert,
    cargadoCorrecto, guardando
} from "../helpers/swalHelper";
import {trans} from "../services/lang.service";

export const getGenericos = (solicitados, msg_cargando = true) => {
    if (msg_cargando)
        cargando();
    return API.post('usuarios/getMultiAllGenerico', { 'peticiones': solicitados })
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
export const guardarGenerico = (catalogo,datos) => {
    guardando();
    let direccion='usuarios/guardarGenerico/';
    let url=direccion+catalogo;
    return API.post(url, datos)
        .then(
            (res) => {
                guardadoCorrecto();
                return res.data;
            }
        ).catch((error) => {
                ocultableDanger(trans('general.errorAlGuardar'), trans('general.error'));
                throw (error);

        });
};


export const eliminarGenerico = (catalogo,data) => {
    let direccion='usuarios/eliminarGenerico/';
    let url=direccion+catalogo;
    return API.post(url, data)
        .then(
            (res) => {
                guardadoCorrecto();
                return res.data;
            }
        ).catch((error) => {
            ocultableDanger(trans('general.errorAlGuardar'), trans('general.error'));
            throw (error);

        });
};