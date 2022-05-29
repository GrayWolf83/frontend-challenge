import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './error'
import imageReducer from './image'

const store = configureStore({
	reducer: {
		errors: errorReducer,
		images: imageReducer,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
