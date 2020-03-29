import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../containers/Home'
import Error from '../containers/Error'
import Login from '../containers/Login'
import Register from '../containers/Register'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/error' component={Error} />
        </Switch>
    </BrowserRouter>
)

export default App