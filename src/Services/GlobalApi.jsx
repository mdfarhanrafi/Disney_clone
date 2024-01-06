import axios from "axios";
import { movieBaseUrl,movieByGenreBaseURL } from "../Constents/Url";
const api_key = 'ad3d0f757ed9976f885cbc413cd76e7a'

const getTrendingvideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL + api_key + "&with_genres="+id)
export default {
    getTrendingvideos,
    getMovieByGenreId
}