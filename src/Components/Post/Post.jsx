import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const postStyle = {
    border: "2px solid red ",
    padding: "5px",
    borderRadius: "15px",
  };
  const { id, title } = post;

  return (
    <div style={postStyle}>
      <h4>Post ID : {id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Show Details</Link>
    </div>
  );
};

export default Post;
