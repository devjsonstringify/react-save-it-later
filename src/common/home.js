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

	componentDidMount() {
		this.getMyList()
		console.log(JSON.stringify(Object.values(this.state.users), null, 2))
	}

	getMyList = () => {
		this.setState({ isLoading: true })
		const req = JSON.stringify({
			consumer_key: '83908-8d70c19b7d191dec195fe678',
			access_token: 'f1d2240f-921e-530b-b834-477c9d',
			sort: 'newest',
			state: 'all',
			detailType: 'complete'
		})
		Api(req).then((users) =>
			this.setState({
				users: users.list,
				isLoading: false
			})
		)
	}

	getFavorate = () => {
		this.setState({ isLoading: true })
		const req = JSON.stringify({
			consumer_key: '83908-8d70c19b7d191dec195fe678',
			access_token: 'f1d2240f-921e-530b-b834-477c9d',
			favorite: 1
		})
		Api(req).then((users) =>
			this.setState({
				users: users.list,
				isLoading: false
			})
		)
	}

	getArchive = () => {
		this.setState({ isLoading: true })
		const req = JSON.stringify({
			consumer_key: '83908-8d70c19b7d191dec195fe678',
			access_token: 'f1d2240f-921e-530b-b834-477c9d',
			state: 'archive'
		})
		Api(req).then((users) =>
			this.setState({
				users: users.list,
				isLoading: false
			})
		)
	}

	getArticle = () => {
		this.setState({ isLoading: true })
		const req = JSON.stringify({
			consumer_key: '83908-8d70c19b7d191dec195fe678',
			access_token: 'f1d2240f-921e-530b-b834-477c9d',
			is_article: 1
		})
		Api(req).then((users) =>
			this.setState({
				users: users.list,
				isLoading: false
			})
		)
	}

	render() {
		console.log(JSON.stringify(this.state.users, null, 2))
		if (this.state.isLoading) {
			return <Loader />
		} else {
			return (
				<React.Fragment>
					{!this.state.users ? (
						<Loader />
					) : (
						<Users
							users={this.state.users}
							{...this.props}
							getMyList={this.getMyList}
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
