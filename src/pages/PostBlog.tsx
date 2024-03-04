import { ToastContainer } from "react-toastify";
import BlogTitle from "../component/BlogTitle";
import Header from "../component/Header";
import PostForm from "../component/PostForm";

const PostBlog = () => {
  return (
    <div>
      <BlogTitle />
      <Header />
      <PostForm />
      <ToastContainer />
    </div>
  );
};

export default PostBlog;
