import React from 'react'
import WithFetch from '../../HOC/api-request'
import View from './fetch-list'

const List = ({ users: { list } }) => {
	const List = Object.values(list)

	return (
		<React.Fragment>
			<ul
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					padding: '0',
					margin: '0 auto',
					maxWidth: 'calc(100vw - 10vw)',
					listStyle: 'none',
					alignItems: 'stretch'
				}}>
				{List.map((keys) => (
					<View key={keys.item_id} {...keys} />
				))}
			</ul>
		</React.Fragment>
	)
}
const withRequest = WithFetch(
	() => `https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/get`,
	`POST`
)
const WrapComponent = withRequest(List)
export default WrapComponent
