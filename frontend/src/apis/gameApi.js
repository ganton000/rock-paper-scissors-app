import axios from 'axios'

export default axios.create({
	baseUrl: "https://rock-paper-v1.herokuapp.com/api"
});