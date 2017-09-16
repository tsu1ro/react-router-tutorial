import React from 'react'
import { Link } from 'react-router'
import Repos from './Repos'

export default React.createClass({
	render (){
		return (
		<div>
			<ul>
				<li><Link to="/About">About</Link></li>
				<li><Link to="/repos">Repos</Link></li>
			</ul>
		</div>
		)
	}
})