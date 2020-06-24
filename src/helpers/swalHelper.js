import Swal from 'sweetalert2';
import {trans} from "../services/lang.service";

// |------Predefinidos------| //
export const cargando = () => {
    return staticPlain(trans('general.cargando'), trans('general.espereCargando'));
};

export const errorCargar = () => {
    return ocultableDanger(trans('general.errorAlCargar'), trans('general.error'));
};

export const errorGuardar = () => {
    return ocultableDanger(trans('general.errorAlGuardar'), trans('general.error'));
};

export const cargadoCorrecto = () => {
    return ocultableSuccess(trans('general.cargadoCorrecto'), trans('general.correcto'));
};

export const guardadoCorrecto = () => {
    return ocultableSuccess(trans('general.guardadoCorrecto'), trans('general.correcto'));
};

export const guardando = () => {
    return ocultableSuccess(trans('general.guardardandoinfo'), trans('general.guardardando'));
};

export const seguroContinuar = () => {
    return confirmar('warning', trans('general.operacionNoRevertir'), trans('general.estaSeguro'));
};

// |------Genericas------| //
export const cerrarAlert = () => {
    Swal.close();
};

// |------Ocultables-------| //
export const ocultableSuccess = (mensaje, titulo = trans('general.exito'), segundos = 3000) => {
    return ocultable('success', mensaje, titulo, segundos);
};

export const ocultableDanger = (mensaje, titulo = trans('general.error'), segundos = 3000) => {
    return ocultable('error', mensaje, titulo, segundos);
};

export const ocultableWarning = (mensaje, titulo = trans('general.error'), segundos = 3000) => {
    return ocultable('warning', mensaje, titulo, segundos);
};

export const ocultableInfo = (mensaje, titulo = trans('general.error'), segundos = 3000) => {
    return ocultable('info', mensaje, titulo, segundos);
};

const ocultable = (type, mensaje, titulo, segundos = 3000) => {
    const options = {
        title: titulo,
        icon: type,
        html: mensaje,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: true,
        timer: segundos
    };
    return Swal.fire(options);
};

// |------Estáticos-------| //
const staticSuccess = (mensaje, titulo = trans('general.exito')) => {
    return estatico('success', mensaje, titulo);
};

const staticDanger = (mensaje, titulo = trans('general.error')) => {
    return estatico('error', mensaje, titulo);
};

const staticWarning = (mensaje, titulo = trans('general.error')) => {
    return estatico('warning', mensaje, titulo);
};

export const staticInfo = (mensaje, titulo = trans('general.error')) => {
    return estatico('info', mensaje, titulo);
};

const staticPlain = (mensaje, titulo = trans('general.error')) => {
    const options = {
        title: titulo,
        icon: '',
        html: mensaje,
        showCloseButton: false,
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        onOpen: () => {
            Swal.showLoading()
        },
    };
    return Swal.fire(options);
};

export const estatico = (type, mensaje, titulo) => {
    const options = {
        title: titulo,
        icon: type,
        html: mensaje,
        showCloseButton: false,
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    };
    return Swal.fire(options);
};

// |------Estáticos ocultables-------| //
export const staticOcultableSuccess = (mensaje, titulo = trans('general.exito')) => {
    return estaticoOcultable('success', mensaje, titulo);
};

export const staticOcultableDanger = (mensaje, titulo = trans('general.error')) => {
    return estaticoOcultable('error', mensaje, titulo);
};

export const staticOcultableWarning = (mensaje, titulo = trans('general.error')) => {
    return estaticoOcultable('warning', mensaje, titulo);
};

export const staticOcultableInfo = (mensaje, titulo = trans('general.error')) => {
    return estaticoOcultable('info', mensaje, titulo);
};

export const staticOcultablePlain = (mensaje, titulo = trans('general.error')) => {
    const options = {
        title: titulo,
        icon: '',
        html: mensaje,
        showCloseButton: false,
        showConfirmButton: true,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        onOpen: () => {
            Swal.showLoading()
        },
    };
    return Swal.fire(options);
};

export const estaticoOcultable = (type, mensaje, titulo) => {
    const options = {
        title: titulo,
        icon: type,
        html: mensaje,
        showCloseButton: false,
        showConfirmButton: true,
        showCancelButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    };
    return Swal.fire(options);
};

export const confirmar = (type, mensaje, titulo) => {
    const options = {
        title: titulo,
        icon: type,
        html: mensaje,
        showCloseButton: false,
        showConfirmButton: true,
        showCancelButton: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true
    };
    return Swal.fire(options);
};


export const progressStatic = (type, mensaje, titulo) => {
    const options = {
        title: titulo,
        icon: type,
        html: mensaje,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading()
        }
    }
    return Swal.fire(options);
}
