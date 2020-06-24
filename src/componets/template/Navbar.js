import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {FaHome, FaUser, FaUserSecret} from "react-icons/fa";
import Avatar from "./Avatar";
import $ from 'jquery';
import { trans } from '../../services/lang.service'


function Navbar({ lang, lang_ok, permisos_ok, setPermisosOk }) {
    const handleCerrarSesion = () => {

    };

    return (
        <nav className="navbar navbar-expand-lg  yellow darken-2 py-0 text-small text-dark">
            <NavLink to="/" className="nav-link navbar-brand" href="#"><span>
                <FaHome />
                {` ${process.env.REACT_APP_APP_NAME}`}
                <Env env={process.env.REACT_APP_ENV} />
            </span></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                        <NavLink className="nav-item px-1"
                                 to="/usuario"><FaUser />
                            <span className="ml-2">{trans('navbar.usuario')}</span>
                        </NavLink>
                    <li className="nav-item">
                        <NavLink className="nav-item px-1"
                                 to="/rol"><FaUserSecret />
                            <span className="ml-2">{trans('navbar.rol')}</span>
                        </NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav navbar-right ">
                        <li className="nav-item"
                            onClick={() => {
                                $('#modalLogin').modal('show');
                                $('#modalLogin').on('shown.bs.modal', () => $('#username').focus());
                            }
                            }>
                            <a className="nav-link" href="#">{trans('navbar.iniciarSesion')}</a>
                        </li> : ''
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <Avatar texto="arturo" width={'1.5rem'} />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#"
                                    onClick={() => handleCerrarSesion()}>{trans('navbar.cerrarSesion')}</a>
                            </div>
                        </li> : ''
                </ul>
            </div>

        </nav>
    );
};

const Env = ({ env }) => {
    if (env != 'prod') {
        const tipo_badge = env === 'dev' ? 'warning' : 'danger';
        return (
            <span className={`p-1 ml-1 badge badge-${tipo_badge}`}>{env}</span>
        );
    }
    return ('');
};

export default Navbar;
