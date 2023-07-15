import { useState } from "react";
import { Cell } from './Cell'

import { COLORS, TARGET } from './misc'
import './CellColumn.css'

export const CellColumn = ( {width, height, boardData, setBoardData, columnNumber, getCell, nextTurn, setNextTurn} ) => {

	const getWinner = (board) => {


		console.log('CHECKING WINNER')

		// Check rows
		for (let y = 0; y < height; y++) {

			let type = board[getCell(0, y)]
			let count = 0
			
			for (let x = 0; x < width; x++) {

				let cell = board[getCell(x, y)]
				
				if (cell == 'empty') {
					type = cell
					count = 0
				}
				else if (cell != type) {
					type = cell
					count = 1
				}
				else
					count++

				if (count == TARGET) return cell
			}
		}

		// Check columns
		for (let x = 0; x < width; x++) {

			let type = board[getCell(x, 0)]
			let count = 0
			
			for (let y = 0; y < height; y++) {

				let cell = board[getCell(x, y)]
				
				if (cell == 'empty') {
					type = cell
					count = 0
				}
				else if (cell != type) {
					type = cell
					count = 1
				}
				else
					count++

				if (count == TARGET) return cell
			}
		}

		// Check cross lines
		for (let i = 0; i < (width + height - 1); i++) {

			const x = (i - (height - 1) >= 0) ? i - (height - 1) : 0;
			const y = (i >= height) ? (height - 1) : i

			let type = board[getCell(x, y)]
			let count = 0

			for (let pos = 0, cellIndex = null; (cellIndex = getCell(x + pos, y - pos)); pos++) {

				let cell = board[cellIndex]
				
				if (cell == 'empty') {
					type = cell
					count = 0
				}
				else if (cell != type) {
					type = cell
					count = 1
				}
				else
					count++

				if (count == TARGET) return cell
			}
		}

		for (let i = 0; i < (width + height - 1); i++) {

			const x = (i < height) ? (width - 1) : (width - 1) - (i - (height - 1))
			const y = (i >= height) ? (height - 1) : i

			console.log( {x, y} )

			let type = board[getCell(x, y)]
			let count = 0

			for (let pos = 0, cellIndex = null; (cellIndex = getCell(x - pos, y - pos)); pos++) {

				let cell = board[cellIndex]
				
				if (cell == 'empty') {
					type = cell
					count = 0
				}
				else if (cell != type) {
					type = cell
					count = 1
				}
				else
					count++

				if (count == TARGET) return cell
			}
		}

		return null
	}

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

				// Check winner
				const winner = getWinner(newBoardData)
				if (winner) {
					console.log(winner)
				}

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