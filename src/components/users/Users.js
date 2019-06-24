import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "octocat",
        avatarUrl: "https://avatars0.githubusercontent.com/u/583231?s=460&v=4",
        htmlUrl: "https://github.com/octocat"
      },
      {
        id: "2",
        login: "octocat",
        avatarUrl: "https://avatars0.githubusercontent.com/u/583231?s=460&v=4",
        htmlUrl: "https://github.com/octocat"
      },
      {
        id: "3",
        login: "octocat",
        avatarUrl: "https://avatars0.githubusercontent.com/u/583231?s=460&v=4",
        htmlUrl: "https://github.com/octocat"
      }
    ]
  };

  render() {
    return (
      <div style={displayStyle}>
        {this.state.users.map(user => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

const displayStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
