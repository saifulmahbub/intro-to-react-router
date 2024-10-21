import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const postStyle = {
    border: "2px solid red ",
    padding: "5px",
    borderRadius: "15px",
  };
  const { id, title } = post;
  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div style={postStyle}>
      <h4>Post ID : {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Show Details</Link>
      <br />
      <button onClick={handleShowDetails}>Click to see Details</button>
    </div>
  );
};

export default Post;
