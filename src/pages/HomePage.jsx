import { useEffect, useState } from "react";
import Posts from "../components/Posts";

const HomePage = (props) => {
  console.log(props);
  const [posts, setPosts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      setPosts(data);
    };
    fetchData();
    console.log(posts);
  }, []);

  return (
    <>
      {posts &&
        posts.slice(0, 12).map((post) => (
          <div key={post.id}>
            <Posts post={post} />
          </div>
        ))}
    </>
  );
};
export default HomePage;
