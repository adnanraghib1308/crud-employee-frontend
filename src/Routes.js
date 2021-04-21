import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import List from './pages/List';
import Update from './pages/Update';
import App from './pages/Home.js';
import Login from './pages/login';
import Signup from './pages/Signup';

export default function Routes(){
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path ='/' exact component={App} />
                    <Route path ='/employee/list' exact component={List} />
                    <Route path ='/employee/update/:id' exact component={Update} />
                    <Route path ='/auth/login' exact component={Login} />
                    <Route path ='/auth/signup' exact component={Signup} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}