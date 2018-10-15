import React from 'react'
import {Router,Route} from 'react-router'
import createHistory from 'history/createBrowserHistory';
import Home from '../pages/Home'
import Class from '../pages/Class'
import Detail from '../pages/Detail'
import Mine from '../pages/Mine'
import NotFound from "../pages/NotFound"
var history=createHistory();
const RouteConfig = (
    <Router path="/" history={history}>
        <div>
            <Route exact path="/"  exact component={Home} />
            <Route path="/home"  exact component={Home} />
            <Route path="/class" component={Class} />
            <Route path="/mine" component={Mine} />  
            <Route path="/detail/:id" component={Detail} />                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        </div>
    </Router>
);
export default RouteConfig;