import React, { Component } from "react";

class UserItem extends Component {
  state = {
    id: "1",
    login: "octocat",
    avatarUrl: "https://avatars0.githubusercontent.com/u/583231?s=460&v=4",
    htmlUrl: "https://github.com/octocat"
  };

  render() {
    return (
      <div className="card text-center">
        <img
          src={this.state.avatarUrl}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{this.state.login}</h3>
        <div>
          <a href={this.state.htmlUrl} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
