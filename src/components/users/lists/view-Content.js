import React from 'react'
import styled from 'styled-components'
import Image from '../../../common/image'

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
					<h5
						style={{
							margin: '0',
							padding: '1em',
							textAlign: 'justify',
							wordBreak: 'break-word'
						}}>
						<a
							href={resolved_url}
							style={{
								color: '#000',
								textDecoration: 'none',
								textTransform: 'uppercase',
								wordBreak: 'break-word'
							}}>
							{resolved_title}
						</a>
					</h5>
				</UserList>
			) : null}
		</React.Fragment>
	)
}
