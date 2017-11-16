import React, {Component} from 'react';
import {login, auth} from "../helpers/auth";
import * as firebase from 'firebase';
import {connect} from 'react-redux';
import {activateGeod, closeGeod} from '../redux';

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginResponsive: 'Merhaba, şimdi giriş yapmak ister misin?',
            password: '',
            user: '',
            //isLogged: false,
            email: ''
        }
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault()

        login(this.state.user, this.state.password).then(result => {
            this.setState({loginResponsive: `Hoşgeldin ${this.state.user}`})
        }).catch(error => {
            this.setState({loginResponsive: error.message})
        })
        /*auth(this.state.user,this.state.password).catch((error) => {
            this.setState({loginResponsive:error.message})
        })*/

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {

        this.removeListener = firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    this
                        .props
                        .activateGeod({email: user.email, isLogged: true})
                    //this.setState({email: user.email, isLogged: true})
                } else {
                    this
                        .props
                        .activateGeod({isLogged: false})
                    //this.setState({isLogged: false})
                }
            })
    }

    componentWillUnmount() {
        this.removeListener()
    }
    render() {

        return (

            <div className="mt-10">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row align-items-center">
                        <div className="col-md-6">
                            <h2>Please Login</h2>
                            {this.props.authed.isLogged
                                ? `Hoşgeldin ${this.props.authed.email}`
                                : this.state.loginResponsive
}
                            <hr/>
                            <div className="form-group has-danger">
                                <label className="sr-only" htmlFor="email">E-Mail Address</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div
                                        className="input-group-addon"
                                        style={{
                                        width: '2.6rem'
                                    }}><i className="fa fa-at"/></div>
                                    <input
                                        type="text"
                                        name="user"
                                        value={this.state.user}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="email"
                                        placeholder="info@mkoseoglu.com"
                                        required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-row align-items-center">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="password">Password</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div
                                        className="input-group-addon"
                                        style={{
                                        width: '2.6rem'
                                    }}><i className="fa fa-key"/></div>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        required/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <button type="submit" className="btn btn-success"><i className="fa fa-sign-in"/>
                                &nbsp; Login</button>
                            <a className="btn btn-link" href="/password/reset">Forgot Your Password?</a>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({authed: state.geod}); //burası

const mapDispatchToProps = {
    activateGeod
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default AppContainer;