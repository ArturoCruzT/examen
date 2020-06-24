import React from 'react';
import {trans} from "../../services/lang.service";
import {FaTrash} from "react-icons/all";
import Check from "../template/Check";

const Listado = ({roles, actualizaRol, eliminarRegistro}) => {
    return (
        <table className="table  table-condensed table-dark">
            <Encabezado></Encabezado>
            <Registros roles={roles} actualizaRol={actualizaRol}
                       eliminarRegistro={eliminarRegistro}></Registros>
        </table>
    )
};

const Encabezado = () => {
    return <thead>
    <tr>
        <th>{trans('rol.nombre')}</th>
        <th>{trans('rol.status')}</th>
    </tr>
    </thead>
}

const Registros = ({roles, actualizaRol, eliminarRegistro}) => {
    return <tbody>
    {
        (roles || []).map( rol =>
        <tr className="cursor" >
            <td onClick={()=>actualizaRol(rol)}>{rol.nombre} </td>
            <td onClick={()=>actualizaRol(rol)}> <Check seleccionado={rol.activo} ejecuta={()=>{}}
                                                        texto_deseleccionado={trans('rol.desActivado')} texto_seleccionado={trans('rol.activo')}/> </td>
            <td><button className="btn btn-outline-danger" onClick={()=>eliminarRegistro(rol)}><FaTrash/> </button></td>
        </tr>
        )
    }
    </tbody>
}

export default Listado;