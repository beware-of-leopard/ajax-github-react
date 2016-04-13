// Javascript Entry Point


import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ListView from './list-view';
import OrgsView from './orgs-view';


render((

	<Router  history={hashHistory}>
		<Route path="/" component={ListView}></Route>
		<Route component={OrgsView} path="/orgs-view/:username"></Route>
	</Router>


	), document.querySelector('.app')
);