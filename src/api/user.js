const BASE_URL = "https://reqres.in/";

const API_FETCH_USERS = (page, per_page) =>
  BASE_URL + `api/users?page=${page}&per_page=${per_page}`;

const API_CREATE_USER = BASE_URL + `api/users`;

const API_EDIT_USER = (user_id) => BASE_URL + `api/users/${user_id}`;

const API_DELETE_USER = (user_id) => BASE_URL + `api/users/${user_id}`;

const USER_API = {
  fetchUsers: API_FETCH_USERS,
  createUser: API_CREATE_USER,
  editUser: API_EDIT_USER,
  deleteUser: API_DELETE_USER,
};

export default USER_API;
