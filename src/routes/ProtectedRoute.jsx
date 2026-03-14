import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../ContextAPI/AuthContext";
import ApplicationStore from "../Utils/LocalStorageUtil";

const ProtectedRoutes = () => {
    const { loggedIn, userType } = useAuthContext();

    if (!loggedIn) {
        return <Navigate replace to="/login" />;
    }

    if (userType === "admin" || userType === "buyer" || userType === "agency") {
        return <Outlet />;
    }

    return <Navigate replace to="/login" />;
}

export default ProtectedRoutes;