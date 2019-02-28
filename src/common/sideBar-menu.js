import React from 'react'
import Item from '.././common/item'
import styled from 'styled-components'
import Tags from '../components/users/lists/tags'

export default (props) => {
	const { getMyList, getFavorate, getArchive, getArticle, users } = props
	const List = styled.nav`
		list-style: none;
		padding: 0;
		text-align: center;
		text-transform: uppercase;
		margin: 1% auto 4%;
		width: calc(100vw / 2);
	`
	return (
		<List>
			<Item handleClick={getMyList} text='MyList' />
			<Item handleClick={getArticle} text='Articles' />
			<Item handleClick={getFavorate} text='Favorates' />n
			<Item handleClick={getArchive} text='Archive' />
			<Tags users={Object.values(users)} />
		</List>
	)
}
