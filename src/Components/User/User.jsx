import PropTypes from "prop-types";

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
    </div>
  );
};
User.propTypes = {
  user: PropTypes.array,
};

export default User;
