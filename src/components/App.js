import React, {Component} from 'react';
import UserAdd from './UserAdd';
import UserList from './UserList';
import Login from './Login';

class App extends Component {

    state = {
        authSuccess: false
    };

    changeAuth = () => {
        this.setState({ authSuccess: true });
    };

    render() {
        const { authSuccess } = this.state;
        return (
            <div className="container">
                <div className="row">
                    {!authSuccess &&
                    <div className="col-md-12">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Login changeAuth={this.changeAuth}/>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    }
                </div>
                {authSuccess &&
                <div className="row">
                    <div className="col-md-6">
                        { authSuccess && <UserAdd/> }
                    </div>
                    <div className="col-md-6">
                        {authSuccess && <UserList/> }
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default App;