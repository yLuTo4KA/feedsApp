import axios from "axios";

const baseURL = "https://dummyjson.com";

export const makeRequest = ({ url = '', method = "get", data = {}, headers = {} }) =>
    axios({
        url,
        method,
        data,
        baseURL,
        headers: {
            ...headers,
        }
    })