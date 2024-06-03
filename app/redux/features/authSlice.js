// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const response = await axios.post(
      "https://api.bespokehrms.com/api/auth/token",
      {
        username,
        password,
      }
    );
    return response.data.token;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearToken: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearToken } = authSlice.actions;

export default authSlice.reducer;
