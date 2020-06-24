import React from "react";
import {trans} from "../../services/lang.service";


const Datalle = ({usuario, actualizaUsuario, roles, onclick}) => {
    return <div className="card border-primary">
        <div className="card card-header">
            {usuario.id ? trans('usuario.editando') : trans('usuario.nuevo')}
        </div>
        <div className="card-body">
            <div>
                <strong className="text-nowrap">{trans('usuario.nombre')}:</strong>
                <input className="input-sm" type="text" value={usuario.nombre}
                       onChange={e => actualizaUsuario({nombre: e.target.value})}/>
            </div>
            <div>
                <strong className="text-nowrap">{trans('usuario.apellidos')}:</strong>
                <input className="input-sm" type="text" value={usuario.apellidos}
                       onChange={e => actualizaUsuario({apellidos: e.target.value})}/>
            </div>
            <div>
                <strong className="text-nowrap">{trans('usuario.username')}:</strong>
                <input className="input-sm" maxLength={6} type="text" value={usuario.nombre_usuario}
                       onChange={e => actualizaUsuario({nombre_usuario: e.target.value})}/>
            </div>
            <div>
                <strong className="text-nowrap">{trans('usuario.password')}:</strong>
                <input className="input-sm" type="password" value={usuario.password}
                       onChange={e => actualizaUsuario({password: e.target.value})}/>
            </div>
            <div>
                <strong className="text-nowrap">{trans('usuario.email')}:</strong>
                <input className="input-sm" value={usuario.correo}
                       onChange={e => actualizaUsuario({correo: e.target.value})}/>
            </div>
            <div>
                <strong className="text-nowrap">{trans('usuario.rol')}:</strong>
                <select key={`rol`} className="form-control form-control-sm text-center"
                        onChange={(e) => {
                            actualizaUsuario({'rol': roles[e.target.value]})
                        }}>
                    <option value="" key="key_op">{usuario.rol.nombre}</option>
                    {(roles || []).map((rol, idx) =>
                        usuario.rol.id !== rol.id && <option key={`po_${idx}`} value={idx}>{rol.nombre}</option>
                    )}
                </select>
            </div>
            <div className="py-1">
                <button className="btn btn-outline-lime w-100 py-1" onClick={() => onclick()}>{trans('general.guardar')}</button>
            </div>

        </div>
    </div>
}

export default Datalle;