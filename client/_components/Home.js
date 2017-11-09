// React-related
import React from 'react'
import PropTypes from 'prop-types' // can also come from react if react <= 15.4.0
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'

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

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { todos } = this.props;
        const marginRight = { marginRight: "10px" }

        // Build Todos list if todos exist and are loaded
        const todosList = !isLoaded(todos)
        ? 'Loading'
        : isEmpty(todos)
        ? 'Todo list is empty'
        : Object.keys(todos).map(
            (key, id) => (
                <div key={key}>
                    {todos[key]}
                </div>
            )
            )

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
                                <Link to={`/userDetails/${i}`} key={user.name.first}>
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

                <h1>Todos</h1>
                <ul>
                {todosList}
                </ul>
                
                <div>
                    <RaisedButton label="Refresh" primary={true} style={marginRight} />
                    <RaisedButton label="Next Page" disabled={true} />
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    todos: PropTypes.array,
    firebase: PropTypes.object
};
  
const wrappedTodos = firebaseConnect([
    '/todos'
  ])(Home)
  
export default connect(
    ({firebase}) => ({
        todos: dataToJS(firebase, 'todos'),
    })
)(wrappedTodos)