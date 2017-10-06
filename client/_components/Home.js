// React-related
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    IndexRoute
} from 'react-router-dom'

// Material-ui
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import INFO_ICON from 'material-ui/svg-icons/action/info';

// Utilities
import USERS_LIST from '../_utils/users';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const marginRight = { marginRight: "10px" }
        return (
            <div>
                <h1 id="title">
                    App Works!
                </h1>

                <div style={{
                boxShadow: "0 5px 35px -2px rgba(0, 0, 0, 0.1)",
                borderRadius: "2px",
                marginBottom: "30px"
            }}>
                    <List>
                        <Subheader>Recent chats</Subheader>

                        {USERS_LIST.map((user, i) => {
                            return(
                                <Link to={`/userDetails/${i}`}>
                                    <ListItem
                                        primaryText={user.name.first + " " + user.name.last}
                                        leftAvatar={<Avatar src={user.picture.large} />}
                                        rightIcon={<INFO_ICON />}
                                    />
                                </Link>
                            )
                        })}
                    </List>
                </div>
                
                <div>
                    <RaisedButton label="Refresh" primary={true} style={marginRight} />
                    <RaisedButton label="Next Page" disabled={true} />
                </div>
            </div>
        )
    }
}