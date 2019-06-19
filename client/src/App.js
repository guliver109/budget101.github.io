import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage'
import DashBoard from './pages/DashBoard/DashBoard';
import LandingPage from './pages/LandingPage/LandingPage';
import axios from 'axios';

export default class App extends Component {
    state = {
        user: null,
        userName: ''
    }
    
    checkForUserData = (cb) => {
        console.log('hello from user data in app');
        axios.post('/signup').then(result => {
            // console.log(result);
            this.setState({
                user: result
            }, cb);
        }).catch(err => {
            if (err) throw err;
        })
    }

    componentDidMount() {
        this.checkForUserData();
    }
    
    render() {
        return(
            <Router>
                <div>
                    <Route exact path = '/' render = {(props) => <LandingPage {...props}/>}/>      
                    <Route exact path = '/signup' render = {(props) => <SignupPage {...props}/>}/>
                    <Route exact path = '/login' render = {(props) => <LoginPage {...props} checkForUserData = {this.checkForUserData} />}/>
                    <Route exact path = '/dashboard' render = {(props) => this.state.user ? <DashBoard {...props} name ={this.state.userName}/> : <LoginPage {...props} checkForUserData = {this.checkForUserData} /> }/>
                </div>
            </Router>
        )
    }
}