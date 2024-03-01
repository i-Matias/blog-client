import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./assets/blog.title.css";
import { teal } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const BlogTitle = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="blog-title-container">
      <div className="spacer"></div>
      <div className="blog-title">
        <h1>TRENDS</h1>
      </div>
      <div className="blog-auth-container">
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: teal[900] }}>M</Avatar>
        </Stack>
        <button className="btn-auth" onClick={handleClick}>
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default BlogTitle;
