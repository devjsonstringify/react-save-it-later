//DRY
//IMPLEMENTING HOC

import React, { Component } from 'react'
import { BulletList } from 'react-content-loader'

const WithFetch = (WrappedComponent, RequestURL) => {
	return class extends Component {
		constructor(props) {
			super(props)

			this.state = {
				error: null,
				isLoading: true,
				users: []
			}
		}

		componentDidMount() {
			this.fetchUsers()
		}

		async fetchUsers() {
			//FETCH DATA RETURNED RESULT OTHERWISE RETURN ERROR
			try {
				const response = await fetch(RequestURL)
				const users = await response.json()
				this.setState({
					users,
					isLoading: false
				})
			} catch (error) {
				this.setState({ error, isLoading: false })
			}
		}

		render() {
			const { isLoading, users, error } = this.state
			if (error) {
				return <p>{error.message}</p>
			} else if (isLoading) {
				return <BulletList />
			} else {
				return <WrappedComponent users={users} {...this.props} />
			}
		}
	}
}

export default WithFetch
