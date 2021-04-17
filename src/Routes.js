import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import List from './employee/List'
import Update from './employee/Update'
import App from './employee/Home.js'

export default function Routes(){
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path ='/' exact component={App} />
                    <Route path ='/employee/list' exact component={List} />
                    <Route path ='/employee/update/:id' exact component={Update} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}