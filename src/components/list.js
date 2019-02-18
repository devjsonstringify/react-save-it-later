import React from 'react'

const Image = ({ top_image_url, resolved_title }) => {
	return (
		<React.Fragment>
			<img src={top_image_url} alt={resolved_title} />
		</React.Fragment>
	)
}

export default Image
