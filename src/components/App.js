import React from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'

import Home from './HomeComponent/HomeComponent'
import history from "./utils/history";
import { store } from '../redux/store'
import './App.css'
import Shortlink from './ShortlinkComponent/ShorlinkComponent'

class App extends  React.Component{

    state = store.getState()
  
    render(){
        return (
            <Router history={history}>
                <Route  path='/' render={ (props) => {return checkRoute(props.location.pathname)} } />
                <div className="main">
                    <Switch>
                        <Route exact={true} path="/">
                            <Home />
                        </Route>
                        <Route exact path="/shortlink/:id" render={props => <Shortlink {...props}  /> }/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

const checkRoute = (location) => {
    if(location === '/login'){
        return <></>
    }
    else{
        
    }
}

export default App