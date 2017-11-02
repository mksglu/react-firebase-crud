import React, {Component} from 'react';
import {tasksRef} from '../reference';
import UserList from './UserList'

export default class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      text: this.state.text,
      id: Date.now()
    }
    tasksRef.push(newUser);
    this.setState({text: ''});
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  render() {
    return (

        <form onSubmit={this.handleSubmit}>
          <div className="form-row align-items-center">
            <div className="col-auto">
              <label className="sr-only" htmlFor="inlineFormInput">Name</label>
              <input required="required" value={this.state.text} onChange={this.handleChange} type="text" className="form-control mb-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe"/>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
     

  );
  }
}
