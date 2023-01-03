import { useAuth } from "../../contexts";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { authToken } = useAuth();
  const location = useLocation();
  return authToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };
