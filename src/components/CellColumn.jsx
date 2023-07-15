import { useState } from "react";
import { Cell } from './Cell'

import { COLORS } from './misc'
import './CellColumn.css'

export const CellColumn = ( {height, boardData, columnNumber, getCell} ) => {

	const getColumnCells = () => {

		let columnCells = Array(height).fill('empty')
		columnCells.map((_, index) => {
			columnCells[index] = boardData[getCell(columnNumber, index)]
		})
		return columnCells
	}

	console.log(getColumnCells())

	return (

		<section style={{
			background: `${COLORS['board']}`,
			border: '4px solid gray',
			width: 'fit-content',
			padding: '0px'
		}}>

			<section>
			{
				Array.from({length: height}, (_, index) => {
					return <Cell key={index} state={boardData[getCell(0, 0)]} />;
				})
			}
			</section>
		</section>
	)
}