import { setLoadingError } from './error'
import { AppDispatch, RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Image from '../types/image'
import imageService from '../services/image.service'

type imageState = {
	entities: Image[]
	dataLoaded: boolean
	isLoading: boolean
}

const initialState: imageState = {
	entities: [],
	dataLoaded: false,
	isLoading: true,
}

const imageSlice = createSlice({
	name: 'images',
	initialState,
	reducers: {
		imagesLoaded(state, action: PayloadAction<Image[]>) {
			state.entities = action.payload
			state.dataLoaded = true
		},
		imagesLoadingEnd(state) {
			state.isLoading = false
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

const { imagesLoaded, imagesLoadingEnd, imageFavoriteChanged } =
	imageSlice.actions

export const loadImagesList = () => async (dispatch: AppDispatch) => {
	try {
		const payload = await imageService.getImages()
		dispatch(
			imagesLoaded(
				payload.map((item: Image) => ({ ...item, favorite: false })),
			),
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
