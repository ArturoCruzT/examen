import axios from 'axios';

export default axios.create(
    {
        baseURL: `${process.env.REACT_APP_URL_API}/`,
        headers: {
            'x-apikey': '59a7ad19f5a9fa0808f11931',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }
);
