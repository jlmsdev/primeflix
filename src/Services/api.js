import axios from 'axios';

/**Corpo da URL base para chamada da API  - depois exportar ela para usar nas rotas*/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;