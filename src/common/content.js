import React from 'react'
import styled from 'styled-components'
import Title from './title'
import Author from './view-author'

export default (props) => {
	//Styled component
	const Li = styled.div`
		position: ${(props) => (props.absolute ? 'absolute' : 'relative')};
		left: ${(props) => (props.left ? props.left : null)};
		right: ${(props) => (props.right ? props.right : null)};
		bottom: ${(props) => (props.bottom ? props.bottom : null)};
		padding: ${(props) => (props.padding ? props.padding : null)};
		width: 100%;
		box-sizing: border-box;
		color: ${(props) => (props.color ? props.color : '#666')};
	`
	return (
		<React.Fragment>
			<Li color='#17243D'>
				<Title {...props} />
			</Li>
			<Li absolute bottom='0' padding='2%' left='1%'>
				<Author {...props} />
			</Li>
		</React.Fragment>
	)
}
