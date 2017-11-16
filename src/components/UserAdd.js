import React, {Component} from 'react';
import {tasksRef} from '../reference';
import firebase from 'firebase'
export default class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserAddResponsive: '',
      text: '',
      authed: false
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);

  }
  componentDidMount() {
    this.removeListener = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          this.setState({authed: true})
        } else {
          this.setState({authed: false})
        }
      })
  }

  componentWillUnmount() {
    this.removeListener()
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.authed) {
      const newUser = {
        text: this.state.text,
        id: Date.now()
      }
      tasksRef.push(newUser);
      this.setState({text: ''});
    } else {
      this.setState({UserAddResponsive: 'Giriş yapmalısın canım.'})
    }

  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  render() {

    return (

      
        <form onSubmit={this.handleSubmit}>
          <div className="form-row align-items-center">
            <div className="col-md-4">
              <label className="sr-only" htmlFor="inlineFormInput">Name</label>
              <input
                required="required"
                value={this.state.text}
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
          {this.state.UserAddResponsive}
        </form>
       

    );
  }
}
