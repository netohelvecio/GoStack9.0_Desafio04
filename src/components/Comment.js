import React from "react";

function Comment({ data }) {
  return (
    <div className="div-comment">
      <div>
        <img className="img-user" src={data.author.avatar} alt="" />
      </div>

      <div className="comment">
        <p>
          <strong> {data.author.name} </strong> {data.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
