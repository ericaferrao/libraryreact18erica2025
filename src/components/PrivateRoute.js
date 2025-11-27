import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component }) => {
    // http://localhost:3000/secret
    const isAuthenticated = false; // Replace with real authentication logic

    return isAuthenticated ? <Component /> : <Navigate to="/" />;
}