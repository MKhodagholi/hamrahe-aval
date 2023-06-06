import { BASE_URL } from ".";

const API_FETCH_USERS = (page) => BASE_URL + `api/users?pages=${page}`;

const USER_API = { fetchUsers: API_FETCH_USERS };

export default USER_API;
