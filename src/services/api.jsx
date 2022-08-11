// BASE_URL => { 
    // https://api.themoviedb.org/3/movie/now_playing };
// MINHA CHAVE KEY => { ?api_key=e4460b952e33360dd29139d07b79bff9 }

import axios from "axios";

 export const api = axios.create({baseURL: 'https://api.themoviedb.org/3/'});

