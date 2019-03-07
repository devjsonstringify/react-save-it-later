import React, { Component } from 'react'

export default async (params) => {
	//* Make API request then filters response to "list" then save to localstorge

	const Options = {
		headers: new Headers({
			'Content-Type': 'application/json',
			'X-Accept': 'application/json'
		}),
		method: 'POST',
		mode: 'cors',
		body: params
	}
	try {
		const response = await fetch(
			`https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/get`,
			Options
		)
		const res = await response.json()
		const users = res.list
		localStorage.setItem('users', JSON.stringify(users))
		return users
	} catch (error) {
		console.log('error')
	}
}
