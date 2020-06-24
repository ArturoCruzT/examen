import React, {useState, useEffect} from 'react';
import Template from "../template/Template";
import {useGlobal} from 'reactn';
import {trans} from '../../services/lang.service';
import Titulo from "../template/Titulo";
import Listado from "./Listado";
import Detalle from "./Detalle";
import ModalDocumentos from "./ModalDocumentos";
import {eliminarGenerico, getGenericos, guardarGenerico} from "../../api/usuarioApi";
import {eliminarAdjunto, guardarFoto, guardarCv} from "../../api/documentoApi";

const Usuario = () => {
    const [control, setControl] = useGlobal('control');
    const [usuarios, setUsusarios] = useState([]);
    const [usuario, setUsusario] = useState({rol:{}});
    const [roles, setRoles] = useState([]);
    const [solicitudes, setSolicitudes] = useState()

    const cargarDatos = () => {
        getGenericos([{nombre: 'usuario', relaciones: ['rol', 'documento_foto','cv']}, {nombre:'rol', relaciones:[]}]).then(response => {
            response.usuario.data.map( us => {
                us.documento_foto =   us.documento_foto !=  null ? us.documento_foto : {};
                us.cv =   us.cv !=  null ? us.cv : {};
            })
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

    const guardarDocumentoFoto = () => {
        guardarFoto(usuario.id, usuario.documento_foto).then( response => {
           cargarDatos();
        });
    };

    const guardarDocumentoCv = () => {
        guardarCv(usuario.id, usuario.cv).then( response => {
            cargarDatos();
        });
    };

    const eliminarDocumento = (id) => {
        eliminarAdjunto(id).then( response => {
           cargarDatos();
        });
    };

    return (
        <Template>
            <Titulo titulo={trans('titulos.tituloUsuario')}/>
            <div className="d-flex justify-content-around">
                <div>
                    <Listado usuarios={usuarios} actualizaUsuario={actualizaUsuario}
                             eliminarRegistro={eliminarUsuario} usuarioSeleccionado={usuario}/>
                </div>
                <div>
                    <Detalle usuario={usuario} actualizaUsuario={actualizaUsuario}
                             roles={roles} onclick={guardarUsuarios} />
                </div>
                {
                usuario.id &&
                <ModalDocumentos usuario={usuario} actualizaUsuario={actualizaUsuario}
                                 guardarDocumentoFoto={guardarDocumentoFoto} guardarDocumentoCv={guardarDocumentoCv}
                                 eliminarDocumento={eliminarDocumento}/>
                }

            </div>
        </Template>
    )
};

export default Usuario;
