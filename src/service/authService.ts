/* eslint-disable import/no-anonymous-default-export */
import { User } from "../utils/const";
import API from "../api/createApi";

const register = async (user: User) => {
  const response = await API.post("/register", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 201) {
    throw new Error(response.data);
  }

  return response.data;
};

const login = async (user: User) => {
  const response = await API.post("/login", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error(response.data);
  }

  const { token } = response.data;
  localStorage.setItem("token", token);

  return response.data;
};

export default { register, login };
