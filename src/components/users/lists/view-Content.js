import React from 'react'
import styled from 'styled-components'
import Image from '../../../common/image'
import Content from '../../../common/content'

export default (props) => {
	const { resolved_title, resolved_url, tags } = props

	const UserList = styled.li`
		flex-basis: 20%;
		margin: 5px;
		position: relative;
		border-left: 4px solid rgba(255, 255, 25, 0);
		border-bottom: 1px solid #dcdce0;
		margin: 10px;
		background-color: #fff;
		border-radius: 3px;
		padding: 1% 1% 0;
		min-height: 250px;

		&:hover {
			background-color: #e5e5e5;
			border-left: 4px solid #fca211;
		}
	`

	return (
		<React.Fragment>
			{resolved_title ? (
				<UserList>
					{/* Disabled image components */}
					{/* <Image {...props} /> */}
					<Content {...props} />
				</UserList>
			) : null}
		</React.Fragment>
	)
}
