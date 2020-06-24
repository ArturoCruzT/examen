import React, {useState, useEffect} from 'react';
import Template from "../template/Template";
import {useGlobal} from 'reactn';
import {trans} from '../../services/lang.service';
import Titulo from "../template/Titulo";
import Listado from "./Listado";
import Detalle from "./Detalle";
import {eliminarGenerico, getGenericos, guardarGenerico} from "../../api/usuarioApi";

const Usuario = () => {
    const [control, setControl] = useGlobal('control');
    const [usuarios, setUsusarios] = useState([]);
    const [usuario, setUsusario] = useState({rol:{}});
    const [roles, setRoles] = useState([]);
    const [solicitudes, setSolicitudes] = useState()

    const cargarDatos = () => {
        getGenericos([{nombre: 'usuario', relaciones: ['rol']}, {nombre:'rol', relaciones:[]}]).then(response => {
            setUsusarios(response.usuario.data);
            setRoles(response.rol.data);
        })
    };

    useEffect(() => {
        cargarDatos();
    }, [])


    const actualizaUsuario = (e) =>{
        setUsusario(Object.assign({}, usuario, e));
    }

    const guardarUsuarios = () =>{
        guardarGenerico('usuario', usuario).then( response => {
           cargarDatos();
        });
    };
    const eliminarUsuario = (e) =>{
        eliminarGenerico('usuario', e).then( response => {
           cargarDatos();
        });
    };

    return (
        <Template>
            <Titulo titulo={trans('titulos.tituloUsuario')}/>
            <div className="d-flex justify-content-around">
                <div>
                    <Listado usuarios={usuarios} actualizaUsuario={actualizaUsuario}
                             eliminarRegistro={eliminarUsuario}/>
                </div>
                <div>
                    <Detalle usuario={usuario} actualizaUsuario={actualizaUsuario}
                             roles={roles} onclick={guardarUsuarios} />
                </div>
            </div>
        </Template>
    )
};

export default Usuario;
