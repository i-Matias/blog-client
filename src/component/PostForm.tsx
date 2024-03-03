import { InputLabel, TextField } from "@mui/material";
import InputFileUpload from "./ui/FileUpload";
import TagSelect from "./ui/TagSelect";
import ContentTextField from "./ui/ContentTextArea";
import PublishButton from "./ui/PublishButton";

import "./assets/post.form.css";

const PostForm = () => {
  return (
    <form method="post" className="post-container">
      <div className="post-title">
        <InputLabel htmlFor="">Title</InputLabel>
        <TextField type="text" placeholder="Title" />
      </div>
      <div className="post-content">
        <InputLabel htmlFor="">Content</InputLabel>
        <ContentTextField />
      </div>
      <div className="post-tags-img">
        <TagSelect />
        <InputFileUpload />
      </div>
      <PublishButton />
    </form>
  );
};

export default PostForm;
