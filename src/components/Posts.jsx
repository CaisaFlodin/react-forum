import { Link } from "react-router-dom";
import apricots from "./assets/apricots-unsplash.jpg";
import style from "./styles/Posts.module.css";

const Posts = ({ post }) => {
  // console.log(post);

  return (
    <div className={style.wrapper}>
      <section className={style.card}>
        <Link
          to={{
            pathname: `/post/${post.id}`,
            post: { ...post },
          }}
        >
          <img src={apricots} alt="Apricots" className={style.img} />

          {post.title}
        </Link>
      </section>
    </div>
  );
};
export default Posts;
