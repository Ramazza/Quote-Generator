import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.api-ninjas.com',
    headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json',
    }
});

export default api;