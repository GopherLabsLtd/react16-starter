// React-related
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    IndexRoute
} from 'react-router-dom'

// Google Maps
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

//Axios
import axios from 'axios';

// Material-ui
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import INFO_ICON from 'material-ui/svg-icons/action/info';

// Utilities
import USERS_LIST from '../_utils/users';

export default class UserDetails extends React.Component {
    constructor(props) {
        super(props);

        this.userID = props.match.params.userID;
        this.user = USERS_LIST[this.userID];

        this.state = {
            lngLat: {}
        };
    }

    componentDidMount() {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.user.location.street}`)
        .then(function (response) {
          if (response.data.results && response.data.results.length > 0) {
            this.setState({
                lngLat: response.data.results[0].geometry.location
            });
          }
        }.bind(this))
    }
    
    render() {
        const marginRight = { marginRight: "10px" }
        const MyMapComponent = withScriptjs(withGoogleMap((props) =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: props.lat, lng: props.lng }}
            >
                <Marker position={{ lat: props.lat, lng: props.lng }} />
            </GoogleMap>
        ))
        return (
            <div style={{
                boxShadow: "0 5px 35px -2px rgba(0, 0, 0, 0.1)",
                borderRadius: "2px",
                marginTop: "94px",
                marginBottom: "30px",
                padding: "15px",
                paddingTop: "0"
            }}>
                <div style={{ textAlign: "center" }}>
                    <img src={this.user.picture.large} style={{
                        marginTop: "-64px",
                        borderRadius: "50%",
                        boxShadow: "0 21px 30px -15px rgba(0, 0, 0, 0.3)"
                    }} />
                </div>

                <div>
                    <h1 className="alignCenter" style={{ marginBottom: 0 }}>
                        {this.user.name.first} {this.user.name.last}
                    </h1>
                </div>

                <div className="marginBottom alignCenter">
                    <p style={{ marginTop: "5px" }}>
                        {this.user.email}
                    </p>
                </div>

                {this.state.lngLat !== {} &&
                    <MyMapComponent
                        lng={this.state.lngLat.lng}
                        lat={this.state.lngLat.lat}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVqwIuyFovQRRlBupj0iEPlG8H7SQpSs4&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px`, margin: "0 -15px" }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                }

                <div style={{ marginTop: "15px" }}>
                    <Link to={`/`}>
                        <RaisedButton label="< Back" primary={true} />
                    </Link>
                </div>
            </div>
        )
    }
}