import axios from "axios";

const key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;

console.log(process.env)

export function fetchAPI(page, pageSize) {
  return axios.get(`${url}/top-headlines?country=br&pageSize=${pageSize}&page=${page}&apiKey=${key}`);
}
