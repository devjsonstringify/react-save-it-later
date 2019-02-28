import React from 'react'
import { BulletList } from 'react-content-loader'

export default (props) => {
	return (
		<React.Fragment>
			<ul
				style={{
					display: 'flex',
					width: '100%',
					listStyle: 'none',
					padding: '0',
					margin: '0 auto'
				}}>
				<li style={{ flexBasis: '25%' }}>
					<BulletList />
				</li>
				<li style={{ flexBasis: '25%' }}>
					<BulletList />
				</li>
				<li style={{ flexBasis: '25%' }}>
					<BulletList />
				</li>
				<li style={{ flexBasis: '25%' }}>
					<BulletList />
				</li>
			</ul>
			<p style={{ textAlign: 'center' }}>
				<span>Please wait, still loading....</span>
			</p>
		</React.Fragment>
	)
}
