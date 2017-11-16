import React, {Component} from 'react';
import UserAdd from './UserAdd';
import UserList from './UserList';
import Login from './Login'
import firebase from 'firebase'



export default class App extends Component {

  render() {
    console.log(this.props.geod)
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <UserAdd/>
            <Login/>
          </div>
          <div className="col-lg-6">
            <UserList/>
          </div>
        </div>
      </div>
    );
  }
}
 
