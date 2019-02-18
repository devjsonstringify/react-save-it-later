import React, { Component } from 'react'

//HOC DECLARATION
const withNull = (Component) => ({ isNull, ...props }) => {
	if (!isNull) {
		return <Component {...props} />
	}
}

export default withNull
