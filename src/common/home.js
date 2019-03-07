import React, { Component } from 'react'
import Users from '../components/users/lists'
import Loader from '../common/loading'
import Api from '.././components/utilities/api-request'

export default class extends Component {
	constructor(props) {
		super(props)

		this.state = {
			error: null,
			isLoading: true,
			users: []
		}
	}

	//* TODO: If localstorage is not empty set.state
	componentDidMount() {
		if (localStorage.getItem('users')) {
			this.setState({
				users: JSON.parse(localStorage.getItem('users')),
				isLoading: false
			})
		}

		this.getMyList()
	}

	getMyList = () => {
		const req = JSON.stringify({
			consumer_key: '83908-8d70c19b7d191dec195fe678',
			access_token: 'f1d2240f-921e-530b-b834-477c9d',
			sort: 'newest',
			state: 'all',
			detailType: 'complete'
		})
		Api(req).then((users) =>
			this.setState({
				users,
				isLoading: false
			})
		)
	}

	// !FIX: Loading is not working when clicking the buttons

	getFavorate = () => {
		const users = Object.values(JSON.parse(localStorage.getItem('users')))
			.map((key) => key)
			.filter((key) => key.favorite === '1')
		this.setState({ users, isLoading: false })
	}

	getArchive = () => {
		//* Get localstorage then make a copy of it then filter
		const users = Object.values(JSON.parse(localStorage.getItem('users')))
			.map((key) => key)
			.filter((key) => key.status == '1')
		this.setState({ users, isLoading: false })
	}

	getArticle = () => {
		//* Get localstorage then make a copy of it then filter
		const users = Object.values(JSON.parse(localStorage.getItem('users')))
			.map((key) => key)
			.filter((key) => key.is_article == '1')
		this.setState({ users, isLoading: false })
	}

	getList = () => {
		//* Get localstorage then make a copy of it then filter
		this.setState({
			users: Object.values(JSON.parse(localStorage.getItem('users'))).map(
				(key) => key
			)
		})
	}

	render() {
		if (this.state.isLoading) {
			return <Loader />
		} else {
			return (
				<React.Fragment>
					{this.state.users && (
						<Users
							{...this.props}
							users={this.state.users}
							getList={this.getList}
							getFavorate={this.getFavorate}
							getArchive={this.getArchive}
							getArticle={this.getArticle}
						/>
					)}
				</React.Fragment>
			)
		}
	}
}
