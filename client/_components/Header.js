import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <AppBar
                title="React16 Starter + JEST"
            />
        )
    }
}