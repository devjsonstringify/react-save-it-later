import React from 'react'
import styled from 'styled-components'

export default (props) => {
	const { resolved_url, resolved_title } = props
	const GetIcon = `https://www.google.com/s2/favicons?domain=${resolved_url}`
	const GetUrl = new URL(`${resolved_url}`)

	const Li = styled.div`
		list-style: none;
		display: flex;
		padding: 0;
		width: 100%;
		align-items: center;
	`
	const Img = styled.img`
		width: 16px;
		height: 16px;
		margin-right: 10px;
	`
	const Anchor = styled.a`
		color: #aaa;
		font-weight: 600;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 10px;
	`
	return (
		<React.Fragment>
			<Li>
				<Img src={GetIcon} alt={resolved_title} />
				<Anchor href={resolved_url} target='_blank'>
					{GetUrl.hostname}
				</Anchor>
			</Li>
		</React.Fragment>
	)
}
