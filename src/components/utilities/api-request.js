import React, { Component } from 'react'

export default async (params) => {
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
		const users = await response.json()
		return users
	} catch (error) {
		console.log('error')
	}
}
