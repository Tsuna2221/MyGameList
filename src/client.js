import axios from 'axios'

const baseUrl = "https://api.rawg.io/api"

export const getData = (type, query) => {
    const q = query ? query.substr(1) : ""
    return axios.get(`${baseUrl}/${type}?page_size=50&${q}`, { headers: { 'User-Agent': 'local-gamedb-app' } }).then(({data}) => data);
}

export const getFromFullUrl = (url) => axios.get(url, { headers: { 'User-Agent': 'local-gamedb-app' } }).then(({data}) => data);