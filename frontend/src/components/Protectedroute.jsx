import { Navigate } from "react-router-dom";

const Protectedroute = ({ children }) => {
    const token = localStorage.getItem("token");

    return token ? children : <Navigate to="/Login" />;
};

export default Protectedroute;