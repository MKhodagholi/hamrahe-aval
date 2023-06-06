import USER_API from "./user";

const GET_CONFIG = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

const BASE_URL = "https://reqres.in/";

const API = { user: USER_API };

export { BASE_URL, GET_CONFIG };
export default API;
