import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "https://localhost:8080",
  headers: {
    "Cache-Control": "public, max-age=3600, s-maxage=3600",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const URLs = {
  UG_LOGIN: "/student-portal/auth/undergraduate",
  LEC_LOGIN: "/student-portal/auth/lecturer",
  EMP_LOGIN: "/student-portal/auth/employee",
  WEBM_LOGIN: "/student-portal/auth/webmaster",
  LOGOUT: "/student-portal/auth/logout",
};