import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './componets/Home/Home';
import Usuario from './componets/Usuario/Usuario';
import Rol from './componets/Rol/Rol';
const ROUTES = [
    { exact: true, path: '/', component: Home },
    { exact: true, path: '/usuario', component: Usuario },
    { exact: true, path: '/rol', component: Rol },
    { exact: true, path: '/404', component: NotFound }
];

function NotFound() {
    return (
        <div>
            <h1>Page not found</h1>
            <a onClick={() => BrowserRouter.goBack()}>Presione aquí para regresar</a>
        </div>
    )
}

export default ROUTES;
