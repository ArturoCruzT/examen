import React from 'react';
import {trans} from "../../services/lang.service";
import {FaTrash} from "react-icons/all";

const Listado = ({usuarios, actualizaUsuario, eliminarRegistro}) => {
    return (
        <table className="table  table-condensed table-dark">
            <Encabezado></Encabezado>
            <Registros usuarios={usuarios} actualizaUsuario={actualizaUsuario}
                       eliminarRegistro={eliminarRegistro}></Registros>
        </table>
    )
};

const Encabezado = () => {
    return <thead>
    <tr>
        <th>{trans('usuario.nombre')}</th>
        <th>{trans('usuario.username')}</th>
        <th>{trans('usuario.email')}</th>
        <th>{trans('usuario.rol')}</th>
    </tr>
    </thead>
}

const Registros = ({usuarios, actualizaUsuario, eliminarRegistro}) => {
    return <tbody>
    {
        (usuarios || []).map( usuario =>
        <tr className="cursor" >
            <td onClick={()=>actualizaUsuario(usuario)}>{usuario.nombre}  {usuario.apellidos}</td>
            <td onClick={()=>actualizaUsuario(usuario)}>{usuario.nombre_usuario} </td>
            <td onClick={()=>actualizaUsuario(usuario)}>{usuario.correo} </td>
            <td onClick={()=>actualizaUsuario(usuario)}>{usuario.rol.nombre} </td>
            <td><button className="btn btn-outline-danger" onClick={()=>eliminarRegistro(usuario)}><FaTrash/> </button></td>
        </tr>
        )
    }
    </tbody>
}

export default Listado;