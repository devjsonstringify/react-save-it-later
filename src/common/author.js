import React from 'react'

export default (props) => {
	const { authors } = props
	const FilteredAuthors = Object.values(authors).map((key) => key.name)
	return <p>Author: {FilteredAuthors}</p>
}
