import React from 'react';

const Badge =({className='',texto='', children})=>{
    return(
        <span className={`badge ${className}`}>{children}{texto}</span>
    );

}

export default Badge;