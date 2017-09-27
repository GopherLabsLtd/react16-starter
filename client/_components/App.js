import React from 'react'
import Header from './Header'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Header />
                
                <div className="container">
                    <h1 id="title">
                        App Works!
                    </h1>
                </div>
            </div>
        )
    }
}