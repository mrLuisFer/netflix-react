import axios from 'axios';

// Es la base de los requests
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
