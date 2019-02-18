import React from 'react'
import DeleteItem from '../../delete-item'

export default (props) => {
	console.log(props)
	const { top_image_url, item_id, resolved_title, resolved_url } = props
	const defaultImage =
		'https://media.giphy.com/media/9RWeDFAf07oxT1hgLB/giphy.gif'
	return (
		<React.Fragment>
			{resolved_title && top_image_url ? (
				<li
					style={{
						flexBasis: '20%',
						margin: '5px',
						position: 'relative',
						border: '1px solid #ededf0',
						borderBottom: '1px solid #dcdce0',
						margin: '10px',
						backgroundColor: '#fff',
						padding: '.78em',
						borderRadius: '3px'
					}}>
					<div style={{ maxHeight: '150px', overflow: 'hidden' }}>
						<img
							style={{
								width: '100%',
								maxWidth: '100%',
								height: '150px',
								objectFit: 'cover'
							}}
							src={top_image_url == undefined ? defaultImage : top_image_url}
							alt={item_id}
							onError={(e) => (e.target.src = `${defaultImage}`)}
						/>
					</div>
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
					<DeleteItem {...props} />
				</li>
			) : null}
		</React.Fragment>
	)
}
