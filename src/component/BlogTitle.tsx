import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./assets/blog.title.css";
import { teal } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

const BlogTitle = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isSuccess);
  const userName = useAppSelector((state) => state.auth.user?.username);
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
        {isLoggedIn && (
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: teal[900] }}>
              {userName?.charAt(0).toUpperCase()}
            </Avatar>
          </Stack>
        )}
        {!isLoggedIn ? (
          <button className="btn-auth" onClick={handleClick}>
            SIGN IN
          </button>
        ) : (
          <button className="btn-auth" onClick={handleClick}>
            LOG OUT
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogTitle;
