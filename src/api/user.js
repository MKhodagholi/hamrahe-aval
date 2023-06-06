import { BASE_URL } from ".";

const API_FETCH_USERS = (page, per_page) =>
  BASE_URL + `api/users?page=${page}&per_page=${per_page}`;

const USER_API = { fetchUsers: API_FETCH_USERS };

export default USER_API;
