import { useEffect } from "react";
import BlogTitle from "../component/BlogTitle";
import Header from "../component/Header";
import PostCard from "../component/PostCard";
import "../component/assets/post.card.css";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getPosts } from "../store/features/postSlice";

const Blog = () => {
  const posts = useAppSelector((state) => state.post.posts);
  const dispatch = useAppDispatch();

  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <BlogTitle />
      <Header />
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </>
  );
};

export default Blog;
