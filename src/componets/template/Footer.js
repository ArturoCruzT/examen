import React from 'react';
import {FaHeart} from "react-icons/fa";
import bandera  from "../../img/mexico.png";

function Footer() {
    return (
        <div className="w-100 d-flex flex-column pt-5 d-print-none">
            <div className="text-center">
                <code className="text-dark">
                    &lt;/&gt; Developed with
                    &nbsp;<span className="text-danger"><FaHeart/></span>&nbsp;
                    in&nbsp;
                    <img src={bandera} style={{height:'1rem'}}/>
                    <br/>
                    {process.env.REACT_APP_VERSION}
                </code>
            </div>
        </div>
    );
}

export default Footer;
