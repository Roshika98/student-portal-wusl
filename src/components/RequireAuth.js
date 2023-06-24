import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ role }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.id && auth.role === role ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace />
  );
};

export const CheckAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.id ? (
    <Navigate to={"/" + auth.role} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default RequireAuth;
