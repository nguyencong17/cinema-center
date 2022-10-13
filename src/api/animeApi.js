import { API_KEY } from "../constants/common";
import { axiosClient2 } from "./axiosClient";

const animeApi = {
  getAllAnime(data) {
    const url = `/trending/anime`
    return axiosClient2.get(url);
  },
  getAnimeById(id) {
    const url = `anime/${id}`
    return axiosClient2.get(url);  
  },
  // getTrailer(id) {
  //   const url = `movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  //   return axiosClient.get(url); 
  // }
}

export default animeApi;
