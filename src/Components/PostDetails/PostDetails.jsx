import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h4>Here Is the Post :{id}</h4>
      <p>Title : {title}</p>
      <p>
        <small>{body}</small>
      </p>
    </div>
  );
};

export default PostDetails;
