import React from 'react'
import Author from './author'
import FavIcons from './fav-icons'

export default (props) => {
	const { resolved_title, resolved_url, excerpt, authors } = props
	const trimmedString = excerpt.substring(0, 100)
	return (
		<div>
			<h5>{resolved_title}</h5>
			<p>{trimmedString} ...</p>
			<ul>
				<li>
					<a href={resolved_url}>
						<span>view &#8599;</span>
					</a>
				</li>
				<li>{!authors ? <p>No Author Found</p> : <Author {...props} />}</li>
				<li>
					<FavIcons {...props} />
				</li>
			</ul>
		</div>
	)
}
