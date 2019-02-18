import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './common/home'
import NotFound from './common/404-page'
import User from './components/users/item'

export default class extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/users/:id' component={User} /> />
						<Route component={NotFound} />
					</Switch>
				</React.Fragment>
			</Router>
		)
	}
}
