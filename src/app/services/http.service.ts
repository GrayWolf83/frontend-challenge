import axios from 'axios'
import conf from '../../conf.json'

const http = axios.create({
	baseURL: conf.API_URL,
})

http.interceptors.request.use(
	function (config) {
		config.headers = {
			...config.headers,
			'x-api-key': conf.API_KEY,
		}

		return config
	},
	function (error) {
		return Promise.reject(error)
	},
)

const httpService = {
	get: http.get,
}

export default httpService
