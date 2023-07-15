import { useState } from 'react';
import { CellColumn } from './CellColumn';

export const Board = ( {width, height} ) => {

	const [boardData, setBoardData] = useState(Array(width * height).fill('red'))

	const getCell = (x, y) => {
		return (y * width) + x
	}

	return (
		<section style={{
			display: 'flex'
		}}>
		{
			Array.from({length: width}, (_, index) => {
				return <CellColumn key={index} height={height} boardData={boardData} columnNumber={index} getCell={getCell} />;
			})
		}

		<button>TEST</button>
		</section>
	)
}
