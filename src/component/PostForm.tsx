import { InputLabel, SelectChangeEvent, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../hooks/reduxHooks";
import { publishPost } from "../store/features/postSlice";
import { Post } from "../utils/const";
import "./assets/post.form.css";
import ContentTextField from "./ui/ContentTextArea";
import InputFileUpload from "./ui/FileUpload";
import PublishButton from "./ui/PublishButton";
import TagSelect from "./ui/TagSelect";

const PostForm = () => {
  const [post, setPost] = useState<Post>({
    title: "",
    tags: [],
    content: "",
  });
  const [file, setFile] = useState<FileList | null>(null);
  const dispatch = useAppDispatch();

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | SelectChangeEvent<typeof post.tags>
  ) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === "image") {
      const file = (e.target as HTMLInputElement).files;
      if (file) {
        setFile(file);
      }
    } else {
      const { value } = e.target;
      setPost({ ...post, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("content", post.content);
    formData.append("tags", post.tags.join(","));
    if (file) formData.append("image", file[0]);

    dispatch(publishPost(formData));
  };
  return (
    <form method="post" className="post-container" onSubmit={handleSubmit}>
      <div className="post-title">
        <InputLabel htmlFor="">Title</InputLabel>
        <TextField
          type="text"
          placeholder="Title"
          value={post.title}
          name="title"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </div>
      <div className="post-content">
        <InputLabel htmlFor="">Content</InputLabel>
        <ContentTextField handleChange={handleChange} content={post.content} />
      </div>
      <div className="post-tags-img">
        <TagSelect handleChange={handleChange} tagName={post.tags} />
        <InputFileUpload handleChange={handleChange} isUploaded={!!file} />
      </div>
      <PublishButton />
    </form>
  );
};

export default PostForm;
