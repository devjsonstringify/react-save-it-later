import React from 'react'
import styled from 'styled-components'
import Image from '../../../common/image'
import Content from '../../../common/content';

export default (props) => {
	const { resolved_title, resolved_url, tags } = props

	const UserList = styled.li`
		flex-basis: 23%;
		margin: 5px;
		position: relative;
		border: 1px solid #ededf0;
		border-bottom: 1px solid #dcdce0;
		margin: 10px;
		background-color: #fff;
		padding: 0 0 0.78em 0;
		border-radius: 3px;
	`

	return (
		<React.Fragment>
			{resolved_title ? (
				<UserList>
					<Image {...props} />
					<Content {...props} />
				</UserList>
			) : null}
		</React.Fragment>
	)
}
