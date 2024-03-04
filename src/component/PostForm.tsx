import { InputLabel, SelectChangeEvent, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { publishPost } from "../store/features/postSlice";
import "./assets/post.form.css";
import ContentTextField from "./ui/ContentTextArea";
import InputFileUpload from "./ui/FileUpload";
import PublishButton from "./ui/PublishButton";
import TagSelect from "./ui/TagSelect";

const PostForm = () => {
  const [post, setPost] = useState<{
    title: string;
    tags: string[];
    content: string;
  }>({
    title: "",
    tags: [],
    content: "",
  });
  const [file, setFile] = useState<FileList | null>(null);
  const { isSuccess, isError, message } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();

  const succesNotify = () => toast.success(message);
  const errorNotify = () => toast.error(message);

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
    if (isSuccess) {
      succesNotify();
    } else if (isError) {
      errorNotify();
    }
    setPost({ title: "", tags: [], content: "" });
    setFile(null);
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
