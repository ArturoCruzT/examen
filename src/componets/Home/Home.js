import React from 'react';
import Template from "../template/Template";
import { useGlobal } from 'reactn';

const Home = () => {
    const [control, setControl] = useGlobal('control');
    return (
        <Template >
                --------------------
        </Template>
    )
};

export default Home;
