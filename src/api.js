import axios from 'axios';

const newAxios = axios;
newAxios.defaults.baseURL = 'http://localhost:3000';
newAxios.defaults.headers = {
    'Content-Type': 'application/json',
};

export default newAxios;
