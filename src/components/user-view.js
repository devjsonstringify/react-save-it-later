import React from 'react'

const UserView = ({ data }) => {
	const {
		name,
		username,
		email,
		address: {
			street,
			suite,
			city,
			zipcode,
			geo: { lat, lng }
		},
		phone,
		website,
		company: { name: cname, catchPhrase, bs }
	} = data

	return (
		<React.Fragment>
			<ul>
				<li>{name}</li>
				<li>{username}</li>
				<li>{email}</li>
				<li>{street}</li>
				<li>{suite}</li>
				<li>{city}</li>
				<li>{zipcode}</li>
				<li>{lat}</li>
				<li>{lng}</li>
				<li>{phone}</li>
				<li>{website}</li>
				<li>{cname}</li>
				<li>{catchPhrase}</li>
				<li>{bs}</li>
			</ul>
		</React.Fragment>
	)
}

export default UserView
