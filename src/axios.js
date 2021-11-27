import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://budgettie-af7c9-default-rtdb.firebaseio.com/'
});

export default instance;