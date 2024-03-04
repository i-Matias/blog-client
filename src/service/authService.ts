/* eslint-disable import/no-anonymous-default-export */
import API from "../api/createApi";
import { User } from "../utils/const";

const register = async (user: User) => {
  const response = await API.post("/v1/users/register", user, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (response.status !== 201) {
    throw new Error(response.data);
  }

  return response.data;
};

const login = async (user: User) => {
  const response = await API.post("/v1/users/login", user, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (response.status !== 201) {
    throw new Error(response.data);
  }

  console.log(response.data.token);

  const token = response.data.token;
  localStorage.setItem("token", token);

  return response.data;
};

export default { register, login };
