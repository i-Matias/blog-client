import BlogTitle from "../component/BlogTitle";
import Header from "../component/Header";
import PostCard from "../component/PostCard";
import { posts } from "../utils/const";
import "../component/assets/post.card.css";

const Blog = () => {
  return (
    <>
      <BlogTitle />
      <Header />
      <div className="post-grid">
        {posts.map((post, index) => (
          <PostCard key={index} index={index} post={post} />
        ))}
      </div>
    </>
  );
};

export default Blog;
