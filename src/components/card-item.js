import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserView from './user-view'

const CardItem = (props) => {
	const {
		match: {
			params: { id }
		}
	} = props
	const {
		location: { state }
	} = props

	const findId = state.find((x) => x.id == `${id}`)
	console.log(id)
	return (
		<React.Fragment>
			<UserView data={findId} />
			<Link to='/'>Back</Link>
		</React.Fragment>
	)
}

export default CardItem
