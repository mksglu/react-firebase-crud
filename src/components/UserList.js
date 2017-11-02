import React, {Component} from 'react';
import {tasksRef} from '../reference';
import {orderBy} from 'lodash';
import UserListItem from './UserListItem'
export default class UserList extends Component {
  state = {
    x: []
  };
  componentDidMount() {
    tasksRef.on('value', snap => {
      const x = [];
      snap.forEach(shot => {
        x.push({
          ...shot.val(),
          key: shot.key
        });
      });

      this.setState({x});

    });
  }
  render() {
    const orderedTasks = orderBy(this.state.x, ['id'], ['desc']);

    return (orderedTasks.map(user => (<UserListItem key={user.key} user={user}/>)))
  }
}
