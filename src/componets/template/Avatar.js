import React from 'react';

const Avatar = ({texto, width}) => {
    return (
        <span className="mr-1">
            <img src={`https://robohash.org/${texto}.png?set=set3`}
                 className="rounded-circle grey lighten-3 border-info"
                 style={{width: width}}/>
        </span>
    );
};

export default Avatar;
