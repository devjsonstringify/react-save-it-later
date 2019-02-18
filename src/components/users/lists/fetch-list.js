import React from 'react'
import CardMedia from './card'

export default (keys) => {
	const { resolved_url, resolved_title, top_image_url, item_id } = keys
	return <CardMedia {...keys} />
}
