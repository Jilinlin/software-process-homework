import React, { Component } from 'react'
import AppBack from './container/AppBack'
import Login from './login/Login'
import {HashRouter as Router,Route,Redirect} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login}/>
                <Route path="/appback" component={AppBack}/>
            </Router>
        )

    }
}
