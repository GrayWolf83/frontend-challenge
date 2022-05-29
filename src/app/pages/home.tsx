import React from 'react'
import ImagesCardsList from '../components/common/image-cards-list'
import { useAppSelector } from '../hooks/use-app-redux-hooks'
import { getImagesList } from '../store/image'

const Home = () => {
	const images = useAppSelector(getImagesList())

	return (
		<div className='page'>
			<ImagesCardsList images={images} />
		</div>
	)
}

export default Home
