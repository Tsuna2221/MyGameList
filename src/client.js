import axios from 'axios'

const baseUrl = "https://api.rawg.io/api"

export const getData = (type, query) => {
    const q = query ? query.substr(1) : ""

    console.log(`${baseUrl}/${type}?page_size=50&${q}`)
    return axios.get(`${baseUrl}/${type}?page_size=50&${q}`, { headers: { 'User-Agent': 'local-gamedb-app' } }).then(({data}) => data);
}

export const getGameData = (game) => {
    const params = ["", "/achievements?page_size=50", "/suggested?page_size=10", "/screenshots"]

    return Promise.all(params.map((str) => {
        return axios.get(`${baseUrl}/games/${game}${str}`, { headers: { 'User-Agent': 'local-gamedb-app' } }).then(({data}) => data);
    }))
}

export const getFromFullUrl = (url) => axios.get(url, { headers: { 'User-Agent': 'local-gamedb-app' } }).then(({data}) => data);