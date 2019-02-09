import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from './common/container'
import NotFound from './common/404-page'
import CardList from './components/card-list'
import CardItem from './components/card-item'

class App extends Component {
	render() {
		const Home = () => {
			return (
				<Container attr='main-content'>
					<h1>Who are you looking for today, Zoe?</h1>
					<CardList />
				</Container>
			)
		}

		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/users/:id' component={CardItem} />
						<Route component={NotFound} />
					</Switch>
				</React.Fragment>
			</Router>
		)
	}
}

export default App
