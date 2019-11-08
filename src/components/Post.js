import React from "react";

import Comment from "./Comment";

function Post({ data }) {
  return (
    <div className="div-post">
      <div className="div-img-info">
        <img className="img-user" src={data.author.avatar} alt="" />

        <div className="div-desc">
          <p>
            <strong> {data.author.name} </strong>
          </p>
          <span> {data.date} </span>
        </div>
      </div>

      <div className="div-content">
        <p> {data.content} </p>
      </div>

      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

export default Post;
