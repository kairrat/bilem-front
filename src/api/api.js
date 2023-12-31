import axios from "axios";

const baseURL = 'http://46.101.157.222:3000/api/';


export const API = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	}
});

API.interceptors.request.use(
    req => {
        req.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        return req;
    }
);