import httpService from './http.service'

const endpoint = 'images/'

const imageService = {
	getImages: async (page: number) => {
		const payload = await httpService.get(
			endpoint + 'search?limit=20&page=' + page,
		)

		return {
			data: payload.data,
			totalCount: payload.headers['pagination-count'],
		}
	},
}

export default imageService
