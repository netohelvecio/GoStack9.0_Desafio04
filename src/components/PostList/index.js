import React, { Component } from "react";

import "./style.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Helvécio Neto",
          avatar: "https://image.flaticon.com/icons/svg/145/145843.svg"
        },
        date: "07 Nov 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Gualter Marques",
              avatar: "https://image.flaticon.com/icons/svg/145/145849.svg"
            },
            content:
              "Sempre estamos procurando novos membros para o time, e geralmente ficamos de olho em que se destaca no Bootcamp"
          }
        ]
      }
    ]
  };

  componentDidMount() {
    console.log(this.state.posts);
  }

  render() {
    return (
      <div className="div-list">
        <div className="div-post">
          <div className="div-img-info">
            <img
              className="img-user"
              src="https://image.flaticon.com/icons/svg/145/145843.svg"
              alt=""
            />

            <div className="div-desc">
              <p>
                <strong>Helvécio Neto</strong>
              </p>
              <span>07 Jun 2019</span>
            </div>
          </div>

          <div className="div-content">
            <p>Pessoal, alguém sabe se a Rocketseat está contratando?</p>
          </div>

          <div className="div-comment">
            <div>
              <img
                className="img-user"
                src="https://image.flaticon.com/icons/svg/145/145849.svg"
                alt=""
              />
            </div>

            <div className="comment">
              <p>
                <strong>Gualter Marques</strong> Sempre estamos procurando novos
                membros para o time, e geralmente ficamos de olho em que se
                destaca no Bootcamp. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nisi veritatis numquam perspiciatis recusandae
                exercitationem quidem tenetur. Debitis eius doloremque dolorum
                dolor omnis odio numquam, pariatur asperiores, quibusdam nam
                illo ratione?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostList;
