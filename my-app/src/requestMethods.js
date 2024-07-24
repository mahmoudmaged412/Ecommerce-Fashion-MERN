import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTRkMTcxNzgyZWVhYzk0ZWZiOTliZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMTgyOTQ2MywiZXhwIjoxNzIyMDg4NjYzfQ.lgoojj0OuCivmimo4t1yHYWabCXITei2FXQjRl826q4"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});