import React, { Component } from "react";

import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Helvécio Neto",
          avatar: "https://image.flaticon.com/icons/svg/145/145846.svg"
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
              "Sempre estamos procurando novos membros para o time, e geralmente ficamos de olho em que se destaca no Bootcamp."
          },
          {
            id: 2,
            author: {
              name: "Brenda Fernanda",
              avatar: "https://image.flaticon.com/icons/svg/145/145844.svg"
            },
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iste provident molestiae recusandae id dicta qui amet laudantium, quodobcaecati tempore ea, non a quidem esse. Minima doloremque dolore rerum."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Vanessa Ferreira",
          avatar: "https://image.flaticon.com/icons/svg/145/145850.svg"
        },
        date: "07 Nov 2019",
        content: "Lorem ipsum massa elit nunc sit purus ultrices bibendum ultrices, per tellus elit donec aenean in nisl id est, adipiscing molestie lobortis etiam morbi mollis at mi. habitasse vehicula justo sem nisi posuere velit mauris dictumst aliquam proin gravida, donec laoreet ultrices sem proin pellentesque hendrerit sollicitudin mattis condimentum. integer praesent metus rhoncus id sem ligula diam nulla laoreet, lacus morbi amet vel justo porttitor felis platea nostra ligula.",
        comments: [
          {
            id: 1,
            author: {
              name: "Pedro Henrique",
              avatar: "https://image.flaticon.com/icons/svg/145/145849.svg"
            },
            content:
              "Sodales adipiscing nam duis facilisis quam aliquam feugiat adipiscing proin, dictum blandit quis mattis eros consectetur maecenas sit consectetur, vulputate tortor vitae placerat a consectetur sit adipiscing."
          },         
        ]
      },
      {
        id: 3,
        author: {
          name: "Lennon Ganjaman",
          avatar: "https://image.flaticon.com/icons/svg/145/145848.svg"
        },
        date: "07 Nov 2019",
        content: "Nostra morbi ad ultricies nibh quis semper convallis adipiscing, elementum leo eget eros euismod viverra dui morbi, litora nec eleifend tortor per lobortis imperdiet. sem egestas cras hac sollicitudin est sit habitasse curae erat mi curae, sollicitudin tincidunt laoreet aliquam consectetur eget commodo aliquet dictumst curabitur maecenas nec, feugiat tempor purus augue litora risus turpis auctor erat inceptos.",
        comments: [
          {
            id: 1,
            author: {
              name: "Marcelo Oliveira",
              avatar: "https://image.flaticon.com/icons/svg/145/145846.svg"
            },
            content:
              "Pulvinar malesuada venenatis euismod hac orci etiam scelerisque congue dolor sit cras erat, egestas torquent scelerisque netus aliquet sagittis pretium suspendisse pulvinar."
          },         
        ]
      }
    ]
  };

  render() {
    return (
      <div className="div-list">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
