import { FC } from "react";
import "./assets/post.card.css";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  index: number;
  post: {
    title: string;
    user: string;
    date: string;
    image: string;
    tags: string[];
    content: string;
  };
  isReadMorePost?: boolean;
}

const PostCard: FC<PostCardProps> = ({ index, post, isReadMorePost }) => {
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    navigate(`/post/${index}`);
  };

  return (
    <div
      key={index}
      className={isReadMorePost ? "read-more-post post" : "post"}
      onClick={() => handleClick(index)}
    >
      <h2>{post.title}</h2>
      <p>
        By {post.user} on {post.date}
      </p>
      <img src={post.image} alt="Post" />
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
