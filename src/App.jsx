import React, { useState } from 'react'
import { Board } from './components/Board'

import './App.css'

function App() {

	return (
		<React.Fragment>
			<Board width={6} height={5}></Board>
		</React.Fragment>
	)
}

export default App
