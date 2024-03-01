import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogTitle from "../component/BlogTitle";
import Header from "../component/Header";
import { Post, posts } from "../utils/const";
import "../component/assets/post.card.css";
import PostCard from "../component/PostCard";

const ReadMore = () => {
  const postId = useParams();
  const [post, setPost] = useState<Post>(posts[postId.id ? +postId.id : 0]);

  useEffect(() => {
    setPost(posts[postId.id ? +postId.id : 0]);
  }, [postId]);

  return (
    <>
      <BlogTitle />
      <Header />
      <PostCard index={+postId.id!} post={post} isReadMorePost={true} />
    </>
  );
};

export default ReadMore;
