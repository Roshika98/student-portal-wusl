import axios from "axios";

export default axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:8080",
});

export const URLs = {
  UG_LOGIN: "/student-portal/auth/undergraduate",
  LEC_LOGIN: "/student-portal/auth/lecturer",
  EMP_LOGIN: "/student-portal/auth/employee",
  WEBM_LOGIN: "/student-portal/auth/webmaster",
  LOGOUT: "/student-portal/auth/logout",
};