import React from 'react'
import { Link } from 'react-router-dom'
import WithFetch from './api-request'

const CardList = ({ users }) => {
	return (
		<React.Fragment>
			<ul>
				{users.map((keys) => {
					const { id, name } = keys
					return (
						<li key={id}>
							<Link to={{ pathname: `/users/${id}`, state: users }}>
								{name}
							</Link>
						</li>
					)
				})}
			</ul>
		</React.Fragment>
	)
}

const WrapComponent = WithFetch(
	CardList,
	'https://jsonplaceholder.typicode.com/users'
)

// const CardItem = ({ data, id }) => {
// 	return (
// 		<React.Fragment>
// 			<li>
// 				<p>
// 					<Link to={{ pathname: `/users/${id}` }}>{data}</Link>
// 				</p>
// 			</li>
// 		</React.Fragment>
// 	)
// }

export default WrapComponent
