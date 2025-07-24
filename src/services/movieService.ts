import axios from "axios";
import type { Movie } from "../types/movie"; 

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search';
axios.defaults.headers["Authorization"] = `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`;
    
interface MoviesHttpResponse {
    results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const endPoint = '/movie';
    const params = {
        query,
    }

    const response = await axios.get<MoviesHttpResponse>(endPoint, { params });

    return response.data.results;
}