import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h4>Here Is the Post :{id}</h4>
      <p>Title : {title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}> go back </button>
    </div>
  );
};

export default PostDetails;
