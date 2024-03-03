import { useState } from "react";
import { useParams } from "react-router-dom";
import BlogTitle from "../component/BlogTitle";
import Header from "../component/Header";
import PostCard from "../component/PostCard";
import "../component/assets/post.card.css";
import { Post } from "../utils/const";
import { useAppSelector } from "../hooks/reduxHooks";

const ReadMore = () => {
  const postId = useParams();
  const [post, setPost] = useState<Post>({
    id: +postId.id!,
    title: "",
    user: "",
    date: "",
    image: "",
    tags: [],
    content: "",
  });

  return (
    <>
      <BlogTitle />
      <Header />
      <PostCard
        post={{ ...post, image: post.image as string }}
        isReadMorePost={true}
      />
    </>
  );
};

export default ReadMore;
