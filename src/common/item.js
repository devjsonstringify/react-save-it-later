import React from 'react'
import styled from 'styled-components'

export default ({ handleClick, text }) => {
	const Anchor = styled.a`
		color: rgb(0, 0, 0);
		cursor: pointer;
		font-weight: 600;
		margin: 1%;
	`
	return (
		<React.Fragment>
			<Anchor onClick={handleClick}> {text} </Anchor>
		</React.Fragment>
	)
}
