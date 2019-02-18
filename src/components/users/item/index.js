import React, { Component } from 'react'

export default ({ users: { list } }) => {
	// console.log('object :', props)
	// console.log(props.location.state)
	console.log(list)
	return (
		<React.Fragment>
			{/* {test.find((user) => user.id == props.match.params.id)} */}
		</React.Fragment>
	)
}
