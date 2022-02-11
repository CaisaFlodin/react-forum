import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./styles/PostDetails.module.css";
import apricots from "./assets/apricots-unsplash.jpg";

const PostDetails = (props) => {
  console.log(props);
  const [showComments, setShowComments] = useState(false);

  return (
    <>
      <div className={style.container}>
        <img src={apricots} alt="Apricots" className={style.img} />
        {props.post ? (
          <main>
            <h1>{props.post.title}</h1>
            <span>Written by user ID {props.post.userId}</span>
            <p>{props.post.body}</p>
          </main>
        ) : (
          <h1>Loading...</h1>
        )}

        <div>
          <Link to="/">
            <button> Homepage</button>
          </Link>
          <button
            onClick={() => {
              setShowComments(!showComments);
            }}
          >
            Comments
          </button>

          {showComments && (
            <section className={style.wrapper}>
              {props.comments.map((comment, i) => {
                return (
                  <ul key={i} className={style.comments}>
                    <li>
                      <strong>Name: {comment.name}</strong>{" "}
                    </li>
                    <li>
                      <strong>Email: {comment.email}</strong>
                    </li>
                    <li>{comment.body}</li>
                  </ul>
                );
              })}
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default PostDetails;
