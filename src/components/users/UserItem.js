import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatarUrl, htmlUrl } }) => {
  return (
    <div className="card text-center">
      <img
        src="https://avatars0.githubusercontent.com/u/1?v=4"
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={htmlUrl} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
