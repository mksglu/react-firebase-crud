import React, {Component} from 'react';
import {tasksRef} from '../reference'
import {connect} from 'react-redux';
import {activateGeod} from '../redux';

export class UserListIstem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textUpdate: '',
      key: ''
    };
    this.value = this
      .value
      .bind(this);
    this.UserUpdatehandleChange = this
      .UserUpdatehandleChange
      .bind(this);

  };

  deleteUser = () => {
    const {key} = this.props.user;
    this.props.authed.isLogged
      ? tasksRef
        .child(key)
        .remove()
      : this
        .props
        .activateGeod({UserAddResponsive: 'Üyeyi silmek için giriş yapmalısın.'});
  };

  UserUpdatehandleChange = (e) => {
    this.setState({textUpdate: e.target.value});
  };

  value = (text, key) => {

    this.setState({key: this.props.user.key, textUpdate: this.props.user.text});

  }
  ClickUpdateItem = () => {
    this.props.authed.isLogged
      ? tasksRef
        .child(this.state.key)
        .update({text: this.state.textUpdate})
    :this
      .props
      .activateGeod({UserAddResponsive: 'Güncelleme yapmak için üye girişi yapmalısınız.'});

  }

  render() {
    return (
      <div>
        <ul className="pb-1 list-group">
          <li
            className="list-group-item d-flex justify-content-between align-items-center">
            <span
              onClick={(e) => this.value(this.props.user.text, this.props.user.key)}
              data-toggle="modal"
              data-target={`#dinamikID-${this.props.user.id}`}>{this.props.user.text}</span>
            <span onClick={this.deleteUser} className="badge badge-primary badge-pill">Sil</span>
          </li>
        </ul>

        <div
          className="modal fade"
          id={`dinamikID-${this.props.user.id}`}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <input
                  required="required"
                  value={this.state.textUpdate}
                  onChange={this
                  .UserUpdatehandleChange
                  .bind(this)}
                  type="text"
                  className="form-control mb-2 mb-sm-0"
                  id="inlineFormInput"
                  placeholder="Jane Doe"/>
              </div>
              <div className="modal-footer">
                <button
                  onClick={this.ClickUpdateItem}
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({authed: state.geod}); //burası
const mapDispatchToProps = {
  activateGeod
};
export default connect(mapStateToProps, mapDispatchToProps)(UserListIstem);