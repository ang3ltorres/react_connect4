import { useState } from "react";
import { Cell } from './Cell'

import { COLORS } from './misc'
import './CellColumn.css'

export const CellColumn = ( {height, boardData, setBoardData, columnNumber, getCell, nextTurn, setNextTurn} ) => {

	const columnClick = () => {
		
		for (let y = height - 1; y >= 0; y--) {

			// Find the last empty cell from top
			if (boardData[getCell(columnNumber, y)] == 'empty') {

				// Change the corresponding cell
				const newBoardData = [...boardData]
				newBoardData[getCell(columnNumber, y)] = nextTurn
				setBoardData(newBoardData)

				// Change turn
				setNextTurn( (nextTurn == 'red') ? 'yellow' : 'red' )

				return
			}
		}
	}

	return (

		<section style={{
			background: `${COLORS['board']}`,
			width: 'fit-content',
			padding: '0px'
		}}>

			<section className="CellColumn" onClick={ columnClick }>
			{
				Array.from({length: height}, (_, index) => {
					return <Cell key={index} state={boardData[getCell(columnNumber, index)]} />;
				})
			}
			</section>
		</section>
	)
}