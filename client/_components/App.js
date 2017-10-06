// React-related
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    IndexRoute
} from 'react-router-dom'

// Components
import Header from './Header'
import Home from './Home'
import UserDetails from './UserDetails'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const marginRight = { marginRight: "10px" }
        return (
            <div>
                <Header />
                
                <div className="container">
                    <Router>
                        <Switch>
                            <Route path="/" component={Home} exact={true} />
                            <Route path="/userDetails/:userID" component={UserDetails} />
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}