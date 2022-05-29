import React from 'react'
import ImagesCardsList from '../components/common/image-cards-list'
import { useAppSelector } from '../hooks/use-app-redux-hooks'
import { getImagesFavoritesList } from '../store/image'

const Favorites = () => {
	const images = useAppSelector(getImagesFavoritesList())

	return (
		<div className='page'>
			<ImagesCardsList images={images} />
		</div>
	)
}

export default Favorites
