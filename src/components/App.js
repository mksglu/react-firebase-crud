import React, {Component} from 'react';
import UserAdd from './UserAdd'
import UserList from './UserList'

class App extends Component {

  render() {
    return (<div className='container'>
      <div className='row'>
        <div className='col-lg-6'>

          <UserAdd/>
        </div>
        <div className='col-lg-6'>

          <UserList/>
        </div>
      </div>

    </div>);
  }
}

export default App;
