import { useState } from 'react';
import { CellColumn } from './CellColumn';

export const Board = ( {width, height} ) => {

	const [boardData, setBoardData] = useState(Array(width * height).fill('empty'))
	const [nextTurn, setNextTurn] = useState( (Math.round(Math.random()) == 1) ? 'red' : 'yellow' )

	const getCell = (x, y) => {

		if (x < 0 || x >= width || y < 0 || y >= height)
			return null

		return (y * width) + x
	}

	return (
		<section style={{
			display: 'flex',
			border: '8px solid lime',
			width: 'fit-content'
		}}>
		{
			Array.from({length: width}, (_, index) => {
				return <CellColumn
					key={index}
					width={width}
					height={height}
					boardData={boardData}
					setBoardData={setBoardData}
					columnNumber={index}
					getCell={getCell}
					nextTurn={nextTurn}
					setNextTurn={setNextTurn}
				/>;
			})
		}
		</section>
	)
}
