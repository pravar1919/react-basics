import React from "react";

const Like = ({ liked, onLike }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      className={classes}
      onClick={() => onLike(liked)}
      style={{ cursor: "pointer" }}
      aria-hidden="true"></i>
  );
};

export default Like;
