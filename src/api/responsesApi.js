import {isLogged} from "../helpers/authHelper";
import {cargadoCorrecto, guardadoCorrecto, ocultableDanger} from "../helpers/swalHelper";
import {trans} from "../services/lang.service";

export const mostrarErrorCargar = (error) => {
    if (isLogged()) {
        let error_str =  (((error || {}).response || {}).data || {}).mensaje || trans('general.errorAlCargar');
        ocultableDanger(error_str, trans('general.error'));
        throw (error);
    }
};
export const mostrarErrorGuardar = (error) => {
    if (isLogged()) {
        let error_str =  (((error || {}).response || {}).data || {}).mensaje || trans('general.errorAlCargar');
        ocultableDanger(error_str, trans('general.error'));
        throw (error);
    }
};
export const returnGuardadoCorrecto = (data) => {
    guardadoCorrecto();
    return data;
};
export const returnCargadoCorrecto = (data) => {
    cargadoCorrecto();
    return data;
};
