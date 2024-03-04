import { useParams } from "react-router-dom";
import BlogTitle from "../component/BlogTitle";
import Header from "../component/Header";
import PostCard from "../component/PostCard";
import "../component/assets/post.card.css";
import { useAppSelector } from "../hooks/reduxHooks";

const ReadMore = () => {
  const { id } = useParams();

  const post = useAppSelector((state) =>
    state.post.posts.find((p) => id && p.postId === +id)
  );

  console.log(post);

  return (
    <>
      <BlogTitle />
      <Header />
      <PostCard post={post!} isReadMorePost={true} />
    </>
  );
};

export default ReadMore;
