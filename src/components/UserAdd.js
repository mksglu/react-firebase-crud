import React, {Component} from 'react';
import {connect} from 'react-redux';
import { onChangeUsername, addUser } from 'redux/actions/userActions';

export class UserAdd extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(addUser());
    };

    handleChange = e => {
        this.props.dispatch(onChangeUsername(e.target.value));
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row align-items-center">
                    <div className="col-md-4">
                        <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                        <input
                            required="required"
                            value={this.props.username}
                            onChange={this.handleChange}
                            type="text"
                            className="form-control mb-2 mb-sm-0"
                            id="inlineFormInput"
                            placeholder="Mert Köseoğlu"/>
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        username: state.user.username,
        users: state.user.users,
    };
};
export default connect(mapStateToProps)(UserAdd);
