import React from 'react'

const Container = ({ children, style, attr }) => (
	<div id={attr ? attr : null}>{children}</div>
)

export default Container
