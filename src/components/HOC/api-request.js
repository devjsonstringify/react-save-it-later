//DRY
//IMPLEMENTING HOC

import React, { Component } from 'react'
import Loading from '../../common/loading'

const WithFetch = (url, method) => (WrappedComponent) => {
	return class extends Component {
		constructor(props) {
			super(props)

			this.state = {
				error: null,
				isLoading: true,
				users: []
			}
		}

		async componentDidMount() {
			//FETCH DATA RETURNED RESULT OTHERWISE RETURN ERROR
			//SOURCE OF PATTERN https://codepen.io/pagetribe/pen/Rgovop?editors=0010
			const Endpoint = typeof url === 'function' ? url(this.props) : url
			const Options = {
				headers: new Headers({
					'Content-Type': 'application/json',
					'X-Accept': 'application/json'
				}),
				method: method,
				mode: 'cors',
				body: JSON.stringify({
					consumer_key: '83908-8d70c19b7d191dec195fe678',
					access_token: 'f1d2240f-921e-530b-b834-477c9d'
				})
			}
			try {
				const response = await fetch(Endpoint, Options)

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
				return <Loading />
			} else {
				return <WrappedComponent users={users} {...this.props} />
			}
		}
	}
}

export default WithFetch
