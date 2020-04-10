import React from "react";
import PropTypes from "prop-types";

const Post = ({ title, author, content, isSummary =false }) => {
  return (
    <div className={"container"}>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{isSummary ? content.substr(0, 80)+'...':content}</p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isSummary: PropTypes.bool.isRequired
};

export default Post;