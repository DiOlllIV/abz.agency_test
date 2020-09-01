import React, { Component } from 'react';
import UsersList from "./UsersList";
import { fetchUsersData } from '../../usersGateway';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      nextPage: "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5", 
      lastUser: 6,
      totalUsers: null,
      isClicked: false,
    }
  }

  fetchAllData = () => 
    fetchUsersData(this.state.nextPage)
      .then(data => {
        this.setState({
          users: [...this.state.users, ...data.users],
          nextPage: data.links.next_url,
          totalUsers: data.total_users,
        })})
      .catch(() => null);

  componentDidMount() {
    this.fetchAllData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.nextPage !== null) 
      this.fetchAllData();
  }

  handleClick = () => {
    this.setState({
      lastUser: this.state.users.length,
      isClicked: true,
    })
  } 

  render() { 
    const {users, lastUser, totalUsers, isClicked } = this.state;
    const firstUsers = this.state.users.slice(0, lastUser);
    const button = (!isClicked && users.length ===  totalUsers) ? 
      <button className="users-btn"
      onClick={this.handleClick}
      >Show more</button> : null;

      return (
      <div className="users">
        <h1 className="users-title">
          Our cheerful users 
        </h1>
        <p className="users-paragraph">
          Attention! Sorting users by registration date
        </p>
        <UsersList users={firstUsers}/>
        {button}
      </div>
    );
  }
};

export default Users;