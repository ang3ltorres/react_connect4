import { COLORS } from './misc'

export const Cell = ( {state} ) => {

	return (
		<div style={{
			background: `${COLORS[state]}`,
			border: '4px solid gray',
			borderRadius: '50%',
			position: 'static',
			width: '50px',
			height: '50px'
		}}>
		</div>
	)
}