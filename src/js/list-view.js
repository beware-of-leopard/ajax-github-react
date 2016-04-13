import React, { Component } from 'react';
import { render } from 'react-dom';
import { hashHistory, Link } from 'react-router';

import Paper from 'material-ui/lib/paper';



export default class ListView extends Component {

	


	render(){


		return(

			<div className="list-view-wrapper">

				    <Paper zDepth={1} className="paper">
				    	<h1>GITHUB Users</h1>
						<Link to={`/orgs-view/jisaacks`}>
							<li><i className="fa fa-user" aria-hidden="true"></i> jisaacks</li>
						</Link>
						<Link to={`/orgs-view/sindresorhus`}>
							<li><i className="fa fa-user" aria-hidden="true"></i> sindresorhus</li>
						</Link>
						<Link to={`/orgs-view/addyosmani`}>
							<li><i className="fa fa-user" aria-hidden="true"></i> addyosmani</li>
						</Link>
						<Link to={`/orgs-view/wycats`}>
							<li><i className="fa fa-user" aria-hidden="true"></i> wycats</li>
						</Link>
						<Link to={`/orgs-view/dhh`}>
							<li><i className="fa fa-user" aria-hidden="true"></i> dhh</li>
						</Link>

				    </Paper>
				  
			</div>

			);

	}

}