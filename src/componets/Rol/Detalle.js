import React from "react";
import {trans} from "../../services/lang.service";
import Check from "../template/Check";
import {FaPlusCircle} from "react-icons/all";


const Datalle = ({rol, actualizaRol,  onclick}) => {
    const actualizaActivo = () =>{
        actualizaRol({activo: !rol.activo});
    }
    return <div className="card border-primary">
        <div className="card card-header d-flex justify-content-between flex-nowrap">
            <div>
            {rol.id ? trans('rol.editando') : trans('rol.nuevo')}
            </div>
        </div>
        <div className="card-body">
            <div>
                <strong className="text-nowrap">{trans('rol.nombre')}:</strong>
                <input className="input-sm" type="text" value={rol.nombre}
                       onChange={e => actualizaRol({nombre: e.target.value})}/>
            </div>
            <div>
                <Check seleccionado={rol.activo} ejecuta={actualizaActivo}
                       texto_deseleccionado={trans('rol.desActivado')} texto_seleccionado={trans('rol.activo')}/>
            </div>
            <div className="py-1">
                <button className="btn btn-outline-lime w-100 py-1" onClick={() => onclick()}>{trans('general.guardar')}</button>
            </div>

        </div>
    </div>
}

export default Datalle;