import httpService from './http.service'

const endpoint = 'images/'

const imageService = {
	getImages: async () => {
		const { data } = await httpService.get(endpoint + 'search?limit=50')
		return data
	},
}

export default imageService
