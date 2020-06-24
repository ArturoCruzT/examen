import React from "react";
import {trans} from "../../services/lang.service";
import FilesDropzone from "../template/FilesDropzone";
import {FaTrash} from "react-icons/all";

const ModalDocumentos = ({usuario, actualizaUsuario, guardarDocumentoCv,guardarDocumentoFoto, eliminarDocumento}) => {
    const agregarFoto = (e) => {
        actualizaUsuario({documento_foto: e[0]})
    }

    const agregarCv = (e) => {
        actualizaUsuario({cv: e[0]})
    }
    return <div>
        <div className="modal fade" id="ModalUsuario" tabIndex="-1" role="dialog"
             aria-labelledby="ModalUsuario" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalUsuario">{usuario.nombre_usuario}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <div>
                            <div>
                                <strong>{trans('usuario.foto')}</strong>
                                {usuario.documento_foto.id ?
                                    <div>
                                        <a href={`${process.env.REACT_APP_URL_API}/documentos/descargarDocumento/${usuario.documento_foto.id}`}>
                                            {usuario.documento_foto.url}
                                        </a>
                                        <button className="btn btn-outline-danger" onClick={()=>eliminarDocumento(usuario.documento_foto.id)}
                                                data-dismiss="modal"> <FaTrash/></button>
                                    </div>
                                     :
                                    <div>
                                        <FilesDropzone onChange={agregarFoto} archivos={usuario.documento_foto}/>
                                        <button type="button" className="btn btn-outline-primary w-100"  onClick={guardarDocumentoFoto}
                                                data-dismiss="modal">
                                            {trans('general.guardar')}</button>
                                    </div>

                                }
                                <strong>{trans('usuario.cv')}</strong>
                                {usuario.cv.id ?
                                    <div>
                                        <a href={`${process.env.REACT_APP_URL_API}/documentos/descargarDocumento/${usuario.cv.id}`}>
                                            {usuario.cv.url}
                                        </a>
                                        <button className="btn btn-outline-danger" onClick={()=>eliminarDocumento(usuario.cv.id)}
                                                data-dismiss="modal"> <FaTrash/></button>
                                    </div>
                                    :
                                    <div>
                                        <FilesDropzone onChange={agregarCv} archivos={usuario.cv}/>
                                        <button type="button" className="btn btn-outline-primary w-100"  onClick={guardarDocumentoCv}
                                                data-dismiss="modal">
                                            {trans('general.guardar')}</button>
                                    </div>

                                }
                            </div>

                        </div>


                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default ModalDocumentos;