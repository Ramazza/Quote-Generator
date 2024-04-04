import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.api-ninjas.com',
    headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY,
        // 'X-Api-Key': 'jXZAY40q4/+da5KSwkalcw==d3NT6J41Zi92wUa4',
        'Content-Type': 'application/json',
    }
});

export default api;