import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import List from './employee/List';
import Update from './employee/Update';
import App from './employee/Home.js';
import Login from './auth/login';
import Signup from './auth/Signup';

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