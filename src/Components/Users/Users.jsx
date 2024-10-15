import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h1>Our Users:{users.length}</h1>
      <p>they have to courage to start gym</p>
      <div className="usersStyle">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
