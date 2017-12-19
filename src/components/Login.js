import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {logIn} from 'redux/actions/authActions';
import {connect} from 'react-redux';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: ''
        };
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.authSuccess){
            nextProps.changeAuth();
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const { email, password } = this.state;
        this.props.dispatch(logIn(email, password));
        //
        // login(this.state.user, this.state.password).then(result => {
        //     this.setState({ loginResponsive: `Hoşgeldin ${this.state.user}` });
        // }).catch(error => {
        //     this.setState({ loginResponsive: error.message });
        // });
        /*auth(this.state.user,this.state.password).catch((error) => {
         this.setState({loginResponsive:error.message})
         })*/

    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const { authLoading, authError } = this.props;
        return (
            <div className="col-md-12">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row align-items-center">
                        <div className="col-md-6">
                            <h2>Please Login</h2>
                            <hr/>
                            <div className="form-group has-danger">
                                <label className="sr-only" htmlFor="email">E-Mail Address</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div
                                        className="input-group-addon"
                                        style={{ width: '2.6rem' }}>
                                        <i className="fa fa-at"/>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        value={this.state.email}
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

                    {authError.error &&
                    <div className="alert alert-danger" role="alert">
                        <strong>Login Error</strong>
                        <ul>
                            <li>
                                Message: {authError.message || '-'}
                            </li>
                            <li>
                                Code: {authError.code || '-'}
                            </li>
                        </ul>
                    </div>
                    }

                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <button disabled={authLoading} type="submit" className="btn btn-success">
                                <i className="fa fa-sign-in"/>&nbsp;
                                {authLoading ? 'Authenticating.. ' : 'Login'}
                            </button>
                            <a className="btn btn-link" href="/password/reset">Forgot Your Password?</a>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

Login.propTypes = {
    authError: PropTypes.object,
    authLoading: PropTypes.bool,
    authSuccess: PropTypes.bool,
    changeAuth: PropTypes.func
};

const mapStateToProps = state => {
    return {
        authError: state.auth.authError,
        authLoading: state.auth.loading,
        authSuccess: state.auth.success,
    };
};

export default connect(mapStateToProps)(Login);