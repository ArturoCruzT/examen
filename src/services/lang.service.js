import {setGlobal, getGlobal} from 'reactn';
import {getLS, setLS} from "../helpers/localstorage";

export const stringsCargados = () => getGlobal().strings == null;

export const getLocale = () => {
    let locale_ls = getLS('locale');//Consulto en localStorage
    if (locale_ls != null)//Si existe en localstorage lo devuelvo
        return locale_ls;
    const locale_env = process.env.REACT_APP_LOCALE != null ? process.env.REACT_APP_LOCALE : 'es';
    setLS('locale', locale_env);
    return locale_env;
};

export const cargarStrings = () => {
    let locale = getLocale();
    import(`../lang/${locale}/index`).then(strings => setGlobal({
        ...getGlobal(),
        control: {...getGlobal().control, strings: strings}
    }));
};

export const trans = (buscado) => {
    if (!stringsCargados())
        cargarStrings();
    let [modulo, key] = buscado.split('.');
    return ((getGlobal().control.strings || {})[modulo] || {})[key] || buscado;
}
