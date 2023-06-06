import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";

const reducer = { user: userReducer.reducer };

const store = configureStore({ reducer });

export default store;
