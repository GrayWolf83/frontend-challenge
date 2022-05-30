import { castDraft } from 'immer'
import React from 'react'
import { useAppDispatch } from '../../hooks/use-app-redux-hooks'
import { changeImageFavorite } from '../../store/image'
import Image from '../../types/image'

interface IProps {
	image: Image
}

const ImageCard = ({ image }: IProps) => {
	const dispatch = useAppDispatch()
	const favoriteChangeHandler = (id: string) => {
		dispatch(changeImageFavorite(id))
	}

	return (
		<div className='card'>
			<div
				className='card__image'
				style={{
					backgroundImage: `url('${image.url}')`,
				}}></div>
			<div className='card__favorite'>
				<img
					className='card__favorite-icon'
					onClick={() => favoriteChangeHandler(image.id)}
					src={
						image.favorite
							? 'favorite-icon-colored.svg'
							: 'favorite-icon.svg'
					}
					alt=''
				/>
			</div>
		</div>
	)
}

export default ImageCard
