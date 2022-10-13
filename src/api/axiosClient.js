import axios from "axios";

export const axiosClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-type' : 'application/json',
  }
})

export const axiosClient2 = axios.create({
  baseURL: 'https://kitsu.io/api/edge',
  headers: {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
  }
})