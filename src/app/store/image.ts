import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Image from '../types/image'
import imageService from '../services/image.service'

type imageState = {
	entities: Image[]
	loadedPage: number
	totalCount: number
	dataLoaded: boolean
	isLoading: boolean
}

const initialState: imageState = {
	entities: [],
	loadedPage: 1,
	totalCount: 0,
	dataLoaded: false,
	isLoading: true,
}

const imageSlice = createSlice({
	name: 'images',
	initialState,
	reducers: {
		imagesLoadingStart(state) {
			state.isLoading = true
		},
		imagesLoaded(
			state,
			action: PayloadAction<{ entities: Image[]; totalCount: number }>,
		) {
			const tempEntities = [...state.entities]
			action.payload.entities.forEach((image) => {
				if (!tempEntities.find((item) => item.id === image.id)) {
					tempEntities.push(image)
				}
			})

			state.entities = tempEntities
			state.totalCount = action.payload.totalCount
			state.dataLoaded = true
		},
		imagesLoadingEnd(state) {
			state.isLoading = false
		},
		imagesLoadedPageChanged(state) {
			state.loadedPage = state.loadedPage + 1
		},
		imageFavoriteChanged(state, action: PayloadAction<string>) {
			state.entities = state.entities.map((image) => {
				if (image.id === action.payload) {
					return {
						...image,
						favorite: !image.favorite,
					}
				}

				return image
			})
		},
	},
})

const {
	imagesLoadingStart,
	imagesLoaded,
	imagesLoadingEnd,
	imageFavoriteChanged,
	imagesLoadedPageChanged,
} = imageSlice.actions

export const loadImagesList =
	(page: number) => async (dispatch: AppDispatch) => {
		dispatch(imagesLoadingStart())
		try {
			const { data, totalCount } = await imageService.getImages(page)
			dispatch(
				imagesLoaded({
					entities: data.map((item: Image) => ({
						...item,
						favorite: false,
					})),
					totalCount: Number(totalCount),
				}),
			)
		} catch (error: any) {
			if (error?.message) {
				dispatch(setLoadingError(error.message))
			}
		} finally {
			dispatch(imagesLoadingEnd())
		}
	}

export const getImagesList = () => (state: RootState) => {
	return state.images.entities
}

export const getImagesFavoritesList = () => (state: RootState) => {
	return state.images.entities.filter((image) => image.favorite)
}

export const getImagesTotalCount = () => (state: RootState) => {
	return state.images.totalCount
}

export const getImagesLoadedPage = () => (state: RootState) => {
	return state.images.loadedPage
}

export const changeImagesLoadedPage = () => (dispatch: AppDispatch) => {
	dispatch(imagesLoadedPageChanged())
}

export const getImagesLoaded = () => (state: RootState) => {
	return state.images.dataLoaded
}

export const getImagesLoadingStatus = () => (state: RootState) => {
	return state.images.isLoading
}

export const changeImageFavorite = (id: string) => (dispatch: AppDispatch) => {
	dispatch(imageFavoriteChanged(id))
}

export default imageSlice.reducer
