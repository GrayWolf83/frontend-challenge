import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DataLoader from './dataLoaders'
import Main from './layouts/main'
import Favorites from './pages/favorites'
import Home from './pages/home'

const App = () => {
	return (
		<DataLoader>
			<Routes>
				<Route path='/' element={<Main />}>
					<Route index element={<Home />} />
					<Route path='favorites' element={<Favorites />} />
				</Route>
			</Routes>
		</DataLoader>
	)
}

export default App
