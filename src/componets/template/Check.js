import React from 'react';
import { MdCheckBoxOutlineBlank  } from 'react-icons/md';
import { FiCheckSquare } from 'react-icons/fi';

const Check = ({key_check, seleccionado , texto_seleccionado , texto_deseleccionado, ejecuta, children}) => {
    return (
        <div className="d-flex justify-content-center" key={key_check}>

            <div className="cursor " onClick={()=> ejecuta(!seleccionado)}>
                { seleccionado ?
                    <FiCheckSquare size={23} className="text-primary rounded"/>
                    :
                    <MdCheckBoxOutlineBlank  size={26}  className="text-danger rounded"/>
                }
            </div>
            <div className="cursor "  onClick={()=> ejecuta(!seleccionado)}>
                {seleccionado ?
                    <span>{texto_seleccionado} </span>
                    :
                    <span> {texto_deseleccionado}</span>
                }
            </div>
            <div className="cursor "  onClick={()=> ejecuta(!seleccionado)}>
                {children}
            </div>
        </div>
    );
};

export default Check;