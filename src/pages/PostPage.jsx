import PostDetails from "../components/PostDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PostPage = (props) => {
  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      let data = await response.json();
      setPost(data);
    };
    fetchData();
  }, []);
  console.log(post);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );
      let data = await response.json();
      setComments(data);
    };
    fetchData();
  }, []);
  console.log(comments);
  return (
    <>
      <PostDetails
        post={props.location.post || post}
        {...props}
        comments={comments}
      />
    </>
  );
};
export default PostPage;
