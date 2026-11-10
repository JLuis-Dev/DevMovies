import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '87e2fa778c532b64744896e7f755f952',
        language: 'pt-BR',
        page: 1
    }
})

export default api;