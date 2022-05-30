import React, { useCallback, useEffect, useState } from 'react'
import ImagesCardsList from '../components/common/image-cards-list'
import PreLoader from '../components/common/pre-loader'
import { useAppDispatch, useAppSelector } from '../hooks/use-app-redux-hooks'
import {
	changeImagesLoadedPage,
	getImagesList,
	getImagesLoadedPage,
	getImagesTotalCount,
	loadImagesList,
} from '../store/image'

const Home = () => {
	const [fetch, setFetch] = useState(false)
	const dispatch = useAppDispatch()
	const images = useAppSelector(getImagesList())
	const totalCount = useAppSelector(getImagesTotalCount())
	const loadedPage = useAppSelector(getImagesLoadedPage())
	const pagesCount = Math.ceil(totalCount / 20)

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
	}, [])

	useEffect(() => {
		if (fetch && loadedPage < pagesCount) {
			setFetch(false)
			dispatch(loadImagesList(loadedPage))
			dispatch(changeImagesLoadedPage())
		}
	}, [fetch])

	function scrollHandler(e: any) {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) ===
			0
		) {
			setFetch(true)
		}
	}
	return (
		<div className='page'>
			<ImagesCardsList images={images} />
			<PreLoader />
		</div>
	)
}

export default Home
