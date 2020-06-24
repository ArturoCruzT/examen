import React from "react";
import {useState} from "react";
import {attemp, creaSesion, loginTrabajador} from "../../helpers/authHelper";
import {FaLock, FaUser} from 'react-icons/fa';
import {trans} from "../../services/lang.service";


export const ModalLogin = () => {
    //|------State------|//
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usuario, setUsuario] = useState({});


    //|-------Actions-------|//
    const attempLogin = () => {
        if (email && password) {
            attemp(email, password).then(data => {
                console.log(data);
            });
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            attempLogin();
        }
    };

    //|------Render-------|//
    return (
        <div className="modal fade"
             id="modalLogin"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title text-center">
                            <FaLock/>
                            {trans('navbar.iniciarSesion')}
                        </h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex flex-column py-1">
                            <Credenciales setEmail={setEmail}
                                          setPassword={setPassword}
                                          handleKeyUp={handleKeyUp}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary"
                                onClick={attempLogin}>
                            <FaLock/> {trans('navbar.iniciarSesion')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

//|------SubCompoenntes------|//
const Credenciales = ({setEmail, setPassword, handleKeyUp}) => {
    return (
        <div>
            <div className="text-center">{trans('navbar.insIniciarSesion')}</div>
            <div className="d-flex flex-column">
                <input className="form-control form-control-sm text-center mt-2"
                       id="username"
                       onKeyUp={handleKeyUp}
                       autoFocus={true}
                       type="email"
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder={trans('navbar.username')}
                />
                <input type="password"
                       className="form-control form-control-sm text-center mt-2"
                       onKeyUp={handleKeyUp}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder={trans('navbar.password')}
                />
            </div>
        </div>
    );
};
