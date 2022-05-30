import React from 'react'
import { useAppSelector } from '../../hooks/use-app-redux-hooks'
import { getImagesLoadingStatus } from '../../store/image'

const PreLoader = () => {
	const isLoading = useAppSelector(getImagesLoadingStatus())

	return isLoading ? (
		<p className='my-2'>... загружаем еще котиков ...</p>
	) : null
}

export default PreLoader
