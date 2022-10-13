import { API_KEY } from "../constants/common";
import { axiosClient } from "./axiosClient";

const filmApi = {
  getAllFilm(data) {
    const url = `movie/popular?api_key=${API_KEY}&language=en-US&page=${data}`
    return axiosClient.get(url);
  },
  getFilmById(id) {
    const url = `movie/${id}?api_key=${API_KEY}&language=en-US`
    return axiosClient.get(url);  
  },
  getVideo(id) {
    const url = `movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    return axiosClient.get(url); 
  },
  getTrending() {
    const url = `trending/all/day?api_key=${API_KEY}&language=en-US`
    return axiosClient.get(url); 
  },
  getGenres() {
    const url = `genre/movie/list?api_key=${API_KEY}&language=en-US`
    return axiosClient.get(url); 
  },
  getPopular() {
    const url = `movie/popular?api_key=${API_KEY}&language=en-US&page=1&limit=10`
    return axiosClient.get(url); 
  },
  getTopRate() {
    const url = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    return axiosClient.get(url); 
  },
  
  
}

export default filmApi;
