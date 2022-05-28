import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './layouts/main'
import Home from './pages/home'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	)
}

export default App
