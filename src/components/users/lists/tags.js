import React from 'react'
import styled from 'styled-components'

const Options = ({ users }) => {
	//Styled components
	const DropDown = styled.select`
		text-transform: uppercase;
		font-weight: 600;
		border: 0;
		background: transparent;
		max-width: 20%;
	`
	// Filtered JSON and get only the tags to use for html select / option

	const GetAllTags = users
		.map((key) => key.tags)
		.filter(function(element) {
			return element !== undefined
		})
		.reduce((acc, item) => {
			Object.entries(item).forEach((attr) => {
				const [key, value] = attr
				if (value.tag !== undefined) {
					if (acc[key]) {
						acc[key].push(value.item_id)
					} else {
						acc[key] = [value.item_id]
					}
				}
			})

			return acc
		}, {})

	// Filtered only the keys
	const FilteredTags = Object.keys(GetAllTags)

	return (
		<React.Fragment>
			<DropDown>
				<option defaultValue>Choose Tags</option>
				{FilteredTags.sort().map((key, indx) => (
					<option key={indx} value={key}>
						{key.toUpperCase()}
					</option>
				))}
			</DropDown>
		</React.Fragment>
	)
}
export default Options
