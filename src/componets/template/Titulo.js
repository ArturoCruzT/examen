import React from 'react';



const Titulo = ({ titulo, children }) => {
    return (
        <div className="container d-flex flex-row justify-content-between w-100">
            <div className="grey-text black-text txts_gray  animated bounceInLeft py-2">
                <h1 className="txts_gray d-flex py-0">
                    <div className="mr-2">    {children} </div>
                    {titulo}
                </h1>
            </div>

        </div>
    );
};

export default Titulo;
