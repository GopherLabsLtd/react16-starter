import React from 'react'
import Header from './Header'

import RaisedButton from 'material-ui/RaisedButton';

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
                    <h1 id="title">
                        App Works!
                    </h1>

                    <div>
                        <RaisedButton label="Default" style={marginRight} />
                        <RaisedButton label="Primary" primary={true} style={marginRight} />
                        <RaisedButton label="Secondary" secondary={true} style={marginRight} />
                        <RaisedButton label="Disabled" disabled={true} />
                    </div>
                </div>
            </div>
        )
    }
}