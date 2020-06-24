import React, {useState, useEffect} from 'react';
import Template from "../template/Template";
import {useGlobal} from 'reactn';
import {trans} from '../../services/lang.service';
import Titulo from "../template/Titulo";
import Listado from "./Listado";
import Detalle from "./Detalle";
import {eliminarGenerico, getGenericos, guardarGenerico} from "../../api/usuarioApi";

const Rol = () => {
    const [control, setControl] = useGlobal('control');
    const [rol, setRol] = useState({});
    const [roles, setRoles] = useState([]);

    const cargarDatos = () => {
        getGenericos([{nombre:'rol', relaciones:[]}]).then(response => {
            setRoles(response.rol.data);
        })
    };

    useEffect(() => {
        cargarDatos();
    }, [])


    const actualizaRol = (e) =>{
        setRol(Object.assign({}, rol, e));
    }

    const guardarRol = () =>{
        guardarGenerico('rol', rol).then( response => {
            cargarDatos();
        });
    };
    const eliminarRol = (e) =>{
        eliminarGenerico('rol', e).then( response => {
            cargarDatos();
        });
    };

    return (
        <Template>
            <Titulo titulo={trans('titulos.tituloRol')}/>
            <div className="d-flex justify-content-around">
                <div>
                    <Listado roles={roles} actualizaRol={actualizaRol}
                             eliminarRegistro={eliminarRol}/>
                </div>
                <div>
                    <Detalle rol={rol} actualizaRol={actualizaRol}
                             onclick={guardarRol} />
                </div>
            </div>
        </Template>
    )
};

export default Rol;