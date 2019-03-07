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
		} else {
			this.getMyList()
		}
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

	getFavorate = async () => {
		//* Get localstorage then make a copy of it then filter
		this.setState({ isLoading: true })
		const localCopy = await JSON.parse(localStorage.getItem('users'))
		const users = Object.values(localCopy)
			.map((key) => key)
			.filter((key) => key.favorite === '1')
		this.setState({ users, isLoading: false })
	}

	getArchive = async () => {
		//* Get localstorage then make a copy of it then filter
		this.setState({ isLoading: true })
		const localCopy = await JSON.parse(localStorage.getItem('users'))
		const users = Object.values(localCopy)
			.map((key) => key)
			.filter((key) => key.status == '1')
		this.setState({ users, isLoading: false })
	}

	getArticle = async () => {
		//* Get localstorage then make a copy of it then filter
		this.setState({ isLoading: true }, () =>
			console.log(JSON.stringify(this.state.isLoading, null, 2))
		)

		const localCopy = await JSON.parse(localStorage.getItem('users'))
		const users = Object.values(localCopy)
			.map((key) => key)
			.filter((key) => key.is_article == '1')
		this.setState({ users, isLoading: false })
	}

	getList = async () => {
		//* Get localstorage then make a copy of it then filter
		this.setState({ isLoading: true })
		const localCopy = await JSON.parse(localStorage.getItem('users'))
		const users = Object.values(localCopy).map((key) => key)
		this.setState({ users, isLoading: false })
	}
	render() {
		// console.log(JSON.stringify(this.state.users, null, 2))
		if (this.state.isLoading) {
			return <Loader />
		} else {
			return (
				<React.Fragment>
					{this.state.users && (
						<Users
							users={this.state.users}
							{...this.props}
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
