import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../utils/const";
import "./assets/post.card.css";

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
      key={post.postId}
      className={isReadMorePost ? "read-more-post post" : "post"}
      onClick={() => handleClick(post.postId!)}
    >
      <h2>{post.title}</h2>
      <p>
        By {post.createdBy} on {post.createdAt.substring(0, 10)}
      </p>
      <img src={post.image[0].fileName} alt={post.image[0].alt} />
      <div className="tags">
        {Array(post.tagsName).map((tag, i) => (
          <span key={i}>{`#${tag}`}</span>
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
