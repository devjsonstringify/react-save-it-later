import React from 'react'

const Container = ({ children, style, attr }) => (
	<div style={style ? style : null} id={attr ? attr : null}>
		{children}
	</div>
)

export default Container
