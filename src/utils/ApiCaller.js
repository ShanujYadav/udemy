import axios from 'axios';

let baseUrl = 'http://43.205.143.98:9000'

export const ApiCaller = async (data, URL) => {
    let url = baseUrl + URL
    const response = await axios.post(url, data)
    const res = await response.json();
    return res
}