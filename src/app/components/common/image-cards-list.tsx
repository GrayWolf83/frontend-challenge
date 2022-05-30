import React from 'react'
import Image from '../../types/image'
import ImageCard from './image-card'

interface IProps {
	images: Image[]
}

const ImagesCardsList = ({ images }: IProps) => {
	return (
		<div className='cards'>
			{images.map((image) => (
				<ImageCard image={image} key={'aA' + image.id} />
			))}
		</div>
	)
}

export default ImagesCardsList
