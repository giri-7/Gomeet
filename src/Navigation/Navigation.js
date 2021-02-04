import React, {Component} from 'react';
import {Route} from 'react-router';
import {BrowserRouter,Switch} from 'react-router-dom';
import App from '../App.js'
import FormDetails from '../FormDetails.js';


export default class Navigation  extends Component{
	render(){
		return(
                <BrowserRouter>
                    <Switch>
                         <Route exact path='/' component={App}/>
                         <Route exact path='/home' component={App}/>
                         <Route exact path='/form' component={FormDetails}/>
                    </Switch>
               </BrowserRouter>     
          );
	}
}
