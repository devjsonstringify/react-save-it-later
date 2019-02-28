import React from 'react'

export default (props) => {
	// const { item_id, top_image_url, top_image_url } = props
	const defaultImage =
		'https://media.giphy.com/media/9RWeDFAf07oxT1hgLB/giphy.gif'
	return (
		<React.Fragment>
			<div style={{ maxHeight: '150px', overflow: 'hidden' }}>
				{props.top_image_url ? (
					<img
						style={{
							width: '100%',
							maxWidth: '100%',
							height: '150px',
							objectFit: 'cover'
						}}
						src={props.top_image_url}
						alt={props.item_id}
						onError={(e) => (e.target.src = `${defaultImage}`)}
					/>
				) : null}
			</div>
		</React.Fragment>
	)
}
