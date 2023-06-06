import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API, { GET_CONFIG } from "../api";

const initialState = {
  users: [], // Array<User>
  userPerPage: 6,
  totalUsers: 12,
  loading: false,
  error: { exist: false, message: "" },
};

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (page, { dispatch }) => {
    dispatch(userActions.changeLoading(true));
    try {
      const res = await axios.get(API.user.fetchUsers(page), GET_CONFIG);
      const data = res.data;
      const users = data.data;
      const userPerPage = data.per_page;
      dispatch(userActions.saveUsers({ users, userPerPage }));
      dispatch(userActions.changeLoading(false));
    } catch (error) {
      dispatch(userActions.changeLoading(false));
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUsers(state, action) {
      // action.payload: {users: Array<User>, userPerPage: number}
      const { users, userPerPage } = action.payload;

      state.users = users;
      state.totalUsers = users.length;
      state.userPerPage = userPerPage;
    },
    changeLoading(state, action) {
      // action.payload: false | true
      state.loading = action.payload;
    },
    changeError(state, action) {
      // action.payload: {exist: false | true, message: string}
      state.error = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
