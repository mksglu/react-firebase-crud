import React from 'react';

const UserListItem = ({ name, deleteUser, userKey }) => (
    <div className="row" style={{marginTop:3}}>
        <div className="col">
            <li className="list-group-item justify-content-between">
                {name || '-'}
                <span onClick={() => deleteUser(userKey)}
                      style={{ float: 'right' }}
                      className="badge badge-warning badge-pill">
                    sil
                </span>
            </li>
        </div>
    </div>
);

export default UserListItem;