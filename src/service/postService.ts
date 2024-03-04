import API from "../api/createApi";

const post = async (formData: FormData) => {
  const response = await API.post("/v1/posts/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
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

const postService = { post, getPosts, getPost, deletePost };

export default postService;
