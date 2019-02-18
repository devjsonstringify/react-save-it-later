import React from 'react'
import WithFetch from '../components/HOC/api-request'

export default (props) => {
	const { item_id } = props

	const Delete = (e) => {
		e.preventDefault()
		console.log('Click..')
		// const withRequest = WithFetch(
		// 	() => `https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/send`,
		// 	`POST`
		// )
		// const WrapComponent = withRequest(Delete)
		//
		// https://getpocket.com/v3/send?actions=%5B%7B%22action%22%3A%22archive%22%2C%22time%22%3A1348853312%2C%22item_id%22%3A229279689%7D%5D&access_token=[ACCESS_TOKEN]&consumer_key=[CONSUMER_KEY]
	}

	return (
		<React.Fragment>
			<button onClick={Delete} id={item_id}>
				Delete
			</button>
		</React.Fragment>
	)
}
