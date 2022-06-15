import axios from 'axios';

export default axios.create({
	baseURL: "https://rock-paper-v1.herokuapp.com/api"
});