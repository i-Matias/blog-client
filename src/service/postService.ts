import API from "../api/createApi";
import { Post } from "../utils/const";

const post = async (post: Post) => {
  const response = await API.post("/v1/posts", post, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 201) {
    throw new Error(response.data);
  }

  return response.data;
};

const getPosts = async () => {
  const response = await API.get("/v1/posts");

  if (response.status !== 200) {
    throw new Error(response.data);
  }

  return response.data;
};

const getPost = async (title: string) => {
  const response = await API.get(`/v1/posts/${title}`);

  if (response.status !== 200) {
    throw new Error(response.data);
  }

  return response.data;
};

const deletePost = async (id: string) => {
  const response = await API.delete(`/v1/posts/${id}`);

  if (response.status !== 204) {
    throw new Error(response.data);
  }

  return response.data;
};

export default { post, getPosts, getPost, deletePost };
