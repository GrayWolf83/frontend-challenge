import React, { useEffect } from 'react'
import Loader from '../components/common/loader'
import { useAppDispatch, useAppSelector } from '../hooks/use-app-redux-hooks'
import {
	getImagesLoaded,
	getImagesLoadingStatus,
	loadImagesList,
} from '../store/image'

interface IProps {
	children: JSX.Element
}

const ImagesLoader = ({ children }: IProps) => {
	const dispatch = useAppDispatch()
	const dataLoaded = useAppSelector(getImagesLoaded())
	const isLoading = useAppSelector(getImagesLoadingStatus())

	useEffect(() => {
		if (!dataLoaded) {
			dispatch(loadImagesList())
		}
	}, [])

	return isLoading ? <Loader /> : children
}

export default ImagesLoader
