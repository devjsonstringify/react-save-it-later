import React from 'react'

const FetchValidation = ({ data, isLoading, error }) => {
	if (!data) {
		return <p>No data yet ...</p>
	}

	if (error) {
		return <p>{error.message}</p>
	}

	if (isLoading) {
		return <p>Loading ...</p>
	}
	return { data }
}

export default FetchValidation
