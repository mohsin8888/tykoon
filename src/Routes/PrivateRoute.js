import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { login } = useSelector((state) => state.login);
  const Admintoken = localStorage.getItem("accessToken");
  const location = useLocation();
  if ( !Admintoken) {
    return <Navigate to="/login" />;
  }
  return children;
};
