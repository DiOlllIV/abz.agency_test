import React from "react";
import ReactTooltip from 'react-tooltip';

const UsersList = (props) => {

  
  return (
    <div className="users-list">
      {
        props.users.map(user => 
          <div key={user.id} 
            className="users-list__item"
          >
            <img className="users-list__item-photo"
             src={user.photo} alt={`${user.name} photo`}
            />
            <span className="users-list__item-name"
              data-tip={user.name}
            >
              {user.name}
            </span>
            <span className="users-list__item-position"
              data-tip={user.position}
            >
              {user.position}
            </span>
            <span className="users-list__item-email"
              data-tip={user.email}
            >
              {user.email}
            </span>
            <span className="users-list__item-phone"
              data-tip={user.phone}
            >
              {user.phone}
            </span>
            <ReactTooltip />
          </div>      
        )
      }
    </div>
  );
}

export default UsersList;