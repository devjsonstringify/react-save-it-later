import React from 'react'
import Content from './view-Content'
import styled from 'styled-components'
import Container from '../../../common/container'
import SideBar from '../../../common/sidebar'

const List = (props) => {
	const { users } = props
	const data = Object.values(users)
	const List = styled.ul`
		display: flex;
		flex-wrap: wrap;
		padding: 0;
		margin: 0 auto;
		max-width: calc(100vw - 10vw);
		list-style: none;
		align-items: stretch;
		position: relative;
	`

	return (
		<React.Fragment>
			<Container>
				<Container>
					<SideBar {...props} />
				</Container>
				<List>
					{data.map((keys) => (
						<Content key={keys.item_id} {...keys} />
					))}
				</List>
			</Container>
		</React.Fragment>
	)
}

export default List
