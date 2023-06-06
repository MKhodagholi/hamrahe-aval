import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API, { DELETE_CONFIG, GET_CONFIG, POST_CONFIG, PUT_CONFIG } from "../api";

const initialState = {
  users: [], // Array<User>
  addedUsers: [],
  userPerPage: 6,
  totalUsers: 12,
  loading: false,
  currentPage: 1,
  error: { exist: false, message: "" },
};

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async ({ page, per_page }, { dispatch }) => {
    dispatch(userActions.changeLoading(true));
    try {
      const res = await axios.get(
        API.user.fetchUsers(page, per_page),
        GET_CONFIG
      );
      const data = res.data;
      const users = data.data;
      dispatch(userActions.saveUsers({ users }));
      dispatch(userActions.changeLoading(false));
    } catch (error) {
      dispatch(userActions.changeLoading(false));
    }
  }
);

export const addUser = createAsyncThunk(
  "user/addUser",
  async ({ name, job, lastName }, { dispatch }) => {
    dispatch(userActions.changeLoading(true));
    try {
      const res = await axios.post(
        API.user.createUser,
        { name, job },
        POST_CONFIG
      );

      const data = await res.data;

      const first_name =
        data.name[0].toUpperCase() + data.name.slice(1).toLowerCase();
      const id = data.id;
      const last_name =
        lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
      const email =
        first_name.toLowerCase() + lastName.toLowerCase() + `@hamrahe-${id}.ir`;

      const imgId = id % 12;

      const avatar = `https://reqres.in/img/faces/${imgId}-image.jpg`;

      const user = { id, first_name, last_name, email, avatar };

      dispatch(userActions.addUser(user));
    } catch (error) {
      dispatch(
        userActions.changeError({
          exist: true,
          message: "خطایی در هنگام ساخت کاربر ایجاد شد.",
        })
      );
      dispatch(userActions.changeLoading(false));
    }
  }
);

export const editUser = createAsyncThunk(
  "user/editUser",
  async ({ name, job, lastName }, { dispatch }) => {
    dispatch(userActions.changeLoading(true));
    try {
      const res = await axios.put(
        API.user.createUser,
        { name, job },
        PUT_CONFIG
      );

      const data = await res.data;

      console.log(data);
    } catch (error) {
      dispatch(
        userActions.changeError({
          exist: true,
          message: "خطایی در هنگام ادیت کاربر ایجاد شد.",
        })
      );
      dispatch(userActions.changeLoading(false));
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async ({ id }, { dispatch }) => {
    dispatch(userActions.changeLoading(true));
    try {
      await axios.delete(API.user.deleteUser(id), DELETE_CONFIG);

      dispatch(userActions.deleteUser(id));
    } catch (error) {
      dispatch(
        userActions.changeError({
          exist: true,
          message: "خطایی در هنگام پاک کردن کاربر ایجاد شد.",
        })
      );
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
      const { users } = action.payload;

      state.users = users;
    },
    addUser(state, action) {
      const user = action.payload;
      state.addedUsers.push(user);
    },
    editUser(state, action) {
      const { editedUser, id } = action.payload;
      // const updatedUsers
    },
    deleteUser(state, action) {
      const id = action.payload;

      const updatedUsers = [...state.users].filter((user) => +user.id !== +id);

      state.users = updatedUsers;
    },
    changeLoading(state, action) {
      // action.payload: false | true
      state.loading = action.payload;
    },
    changeError(state, action) {
      // action.payload: {exist: false | true, message: string}
      state.error = action.payload;
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    changeUserPerPage(state, action) {
      state.userPerPage = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
