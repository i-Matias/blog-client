import { FC } from "react";
import "./assets/post.card.css";
import { useNavigate } from "react-router-dom";
import { Post } from "../utils/const";

interface PostCardProps {
  post: Post;
  isReadMorePost?: boolean;
}

const PostCard: FC<PostCardProps> = ({ post, isReadMorePost }) => {
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    navigate(`/post/${index}`);
  };

  return (
    <div
      key={post.id}
      className={isReadMorePost ? "read-more-post post" : "post"}
      onClick={() => handleClick(post.id!)}
    >
      <h2>{post.title}</h2>
      <p>
        By {post.user} on {post.date}
      </p>
      <img src={post.image as string} alt="Post" />
      <div className="tags">
        {post.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <p id={isReadMorePost ? "content" : ""}>
        {!isReadMorePost
          ? post.content.substring(0, 100) + "..."
          : post.content}
      </p>
    </div>
  );
};

export default PostCard;
