import axios from 'axios';
import {getLS} from '../helpers/localstorage';

export default axios.create(
    {
        baseURL: `${process.env.REACT_APP_URL_API}/`
    }
);
