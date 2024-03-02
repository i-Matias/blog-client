import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../service/authService";
import { User } from "../../utils/const";

interface AuthState {
  user: User | null;
  token: string | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk(
  "/register",
  async (user: User, { rejectWithValue }) => {
    try {
      return await authService.register(user);
    } catch (err: any) {
      const message = err.toString();
      return rejectWithValue({ message });
    }
  }
);

export const login = createAsyncThunk(
  "/login",
  async (user: User, { rejectWithValue }) => {
    try {
      return await authService.login(user);
    } catch (err: any) {
      const message = err.toString();
      return rejectWithValue({ message });
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state: AuthState) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.user = null;
        state.token = null;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
