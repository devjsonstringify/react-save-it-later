import React from 'react'
import styled from 'styled-components'

export default (props) => {
	const { resolved_title, excerpt, resolved_url } = props
	const trimmedString = excerpt.substring(0, 100)

	// Styled Component
	const Div = styled.div`
		position: relative;
	`
	const H3 = styled.h3`
		text-transform: capitalize;
		line-height: 1.6;
	`
	const Para = styled.p`
		text-align: left;
	`

	return (
		<React.Fragment>
			{excerpt ? (
				<Div>
					<a href={resolved_url}>
						<H3>{resolved_title}</H3>
					</a>
					<Para>{trimmedString} ...</Para>
				</Div>
			) : null}
		</React.Fragment>
	)
}
