import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Template(props) {
    return (
        <div>
            <Navbar/>
                {props.children}
            <Footer/>
        </div>
    );
}

export default Template;
