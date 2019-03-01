import React from 'react'

export default (props) => {
	const { resolved_url, resolved_title } = props
	const GetIcon = `https://www.google.com/s2/favicons?domain=${resolved_url}`
	const GetUrl = new URL(`${resolved_url}`)
	return (
		<React.Fragment>
			<p>
				{GetUrl.hostname}
				<img src={GetIcon} alt={resolved_title} />
			</p>
		</React.Fragment>
	)
}
