import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";

export const PrivateRoute = ({ children }) => {
   useSelector((state) => state.m);
  const Admintoken = localStorage.getItem("accessToken");

  if ( !Admintoken) {
    return <Navigate to="/login" />;
  }
  return children;
};
