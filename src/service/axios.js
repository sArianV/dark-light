import axios from 'axios';

const clientAxios = axios.create({
    baseURL: "https://www.gamerpower.com/api/"
});

export default clientAxios;