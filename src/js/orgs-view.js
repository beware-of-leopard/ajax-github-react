import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, hashHistory } from 'react-router';
import { ajax } from 'jquery';
import NProgress from 'nprogress';


////material ui imports
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Code from 'material-ui/lib/svg-icons/action/code';

export default class OrgsView extends Component {

	constructor(...args){
		super(...args);

		this.state = {

			orgs: []

		}

	}


	clickHandler(){

		hashHistory.push('/');

	}



	componentWillMount(){

		NProgress.start();

		let { username } = this.props.params;

		ajax(`https://api.github.com/users/${username}/orgs?access_token=15879f20a4f62309eac75ff6f01cea447cb02bcb`).then(data => {

			this.setState({

				orgs: data

			});
			NProgress.done();


			console.log(this.state.orgs[0].login);

		});
		}

	render(){

		let { orgs } = this.state;
		let { username } = this.props.params;
		

		console.log("orgs =>", orgs);
		console.log(orgs.map(org=> org.login));

		return(

			<div className="orgs-view-wrapper">
				

				<h1>Organizations for {username}</h1>

	 			<div>
	 				<button onClick={::this.clickHandler}><i className="fa fa-arrow-left"></i></button>
	 			    <List>
				 	{orgs.map(org => {

					return <ListItem primaryText={org.login} leftAvatar={<Avatar src={org.avatar_url} />} rightIcon={<Code />}/>

					})}

				</List>
				</div>

			</div>


			);

	}

}


