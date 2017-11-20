import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {tasksRef} from '../reference';
import {orderBy} from 'lodash';
import UserListItem from './UserListItem';
import {connect} from 'react-redux';
import {getUsers, deleteUser} from 'redux/actions/userActions';

class UserList extends Component {

    componentWillMount() {
        this.props.dispatch(getUsers());
    }

    deleteUser = (key) => {
        this.props.dispatch(deleteUser(key));
    };

    updateUser = () => {
        return null;
    };

    render() {
        const { userList, userDeleteLoading } = this.props;
        const ordered = orderBy(userList, ['id'], ['desc']);
        return ordered.map(user =>
            <UserListItem
                userDeleteLoading={userDeleteLoading}
                deleteUser={this.deleteUser}
                key={user.key} // Burada key component'e prop olarak geçemiyor çünkü react'e özel bir attribute.
                userKey={user.key} // Bu yüzden farklı bir isimde gönderiyoruz user key verisini.
                name={user.username}
                id={user.id}/>
        );
    }
}

UserList.propTypes = {
    userList: PropTypes.array,
    userDeleteLoading: PropTypes.bool,
};

const mapStateToProps = state => {
    return {
        userList: state.user.users,
        userDeleteLoading: state.user.userDeleteLoading
    };
};

export default connect(mapStateToProps)(UserList);