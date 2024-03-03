import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../utils/const";
import postService from "../../service/postService";

interface PostState {
  posts: Post[];
  post: Post | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: PostState = {
  posts: [],
  post: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const post = createAsyncThunk(
  "/post",
  async (post: Post, { rejectWithValue }) => {
    try {
      return await postService.post(post);
    } catch (err: any) {
      const message = err.toString();
      return rejectWithValue({ message });
    }
  }
);

export const getPosts = createAsyncThunk("/getPosts", async () => {
  try {
    return await postService.getPosts();
  } catch (err: any) {
    throw new Error(err.toString());
  }
});

export const getPost = createAsyncThunk(
  "/getPost",
  async (title: string, { rejectWithValue }) => {
    try {
      return await postService.getPost(title);
    } catch (err: any) {
      const message = err.toString();
      return rejectWithValue({ message });
    }
  }
);

export const deletePost = createAsyncThunk(
  "/deletePost",
  async (id: string, { rejectWithValue }) => {
    try {
      return await postService.deletePost(id);
    } catch (err: any) {
      const message = err.toString();
      return rejectWithValue({ message });
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state: PostState) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(post.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(post.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Post created successfully";
      })
      .addCase(post.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.posts = payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.post = payload;
      })
      .addCase(getPost.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Post deleted successfully";
      })
      .addCase(deletePost.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = postSlice.actions;

export default postSlice.reducer;
