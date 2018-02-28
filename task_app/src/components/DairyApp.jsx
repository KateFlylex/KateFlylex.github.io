import React from 'react';
import About from './About.jsx';
import { Switch, Route } from 'react-router-dom'

import ItemsPage from './ItemsPage.jsx';

require('./style.css')

const DairyApp = React.createClass({
		render: function() {
		return (
  		<div>
    		<About />
    		<ItemsPage />
 		 </div>
		);
	}
});

module.exports = DairyApp;