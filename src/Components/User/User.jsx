import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, username, name, email, phone } = user;
  const userStyle = {
    border: "2px solid red ",
    padding: "5px",
    borderRadius: "15px",
  };
  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <p>userName:{username}</p>
      <p>Email: {email}</p>
      <p>Phone Number:{phone}</p>
      <Link to={`/user/${id}`}>show details</Link>
      <Link to={`/user/${id}`}>Click Me</Link>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.array,
};

export default User;
