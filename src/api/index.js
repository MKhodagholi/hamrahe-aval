import USER_API from "./user";

const GET_CONFIG = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

const POST_CONFIG = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

const PUT_CONFIG = {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
};

const DELETE_CONFIG = {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
};

const API = { user: USER_API };

export { GET_CONFIG, POST_CONFIG, PUT_CONFIG, DELETE_CONFIG };
export default API;
