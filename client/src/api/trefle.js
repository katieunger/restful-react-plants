import axios from 'axios';
import keys from '../keys';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default axios.create({
    baseURL: proxyurl + 'https://trefle.io',
    headers: {
        Authorization: 'Bearer ' + keys.trefleKey
    }
})
