import React from 'react'
import ImagesLoader from './images-loader'

interface IProps {
	children: JSX.Element
}

const DataLoader = ({ children }: IProps) => {
	return (
		<>
			<ImagesLoader>{children}</ImagesLoader>
		</>
	)
}

export default DataLoader
