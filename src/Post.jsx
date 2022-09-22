import React from "react";

const Post = (props) => {
  return (
    <>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  );
};

export default Post;
