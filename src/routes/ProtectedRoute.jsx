import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../ContextAPI/AuthContext";
import ApplicationStore from "../Utils/LocalStorageUtil";

const ProtectedRoutes = () => {   
    const loggedIn = ApplicationStore().getStorage('isLoggedIn');
    const userType = ApplicationStore().getStorage('userType');

    if (!loggedIn) {
        return <Navigate replace to="/" />;
    }

    if (userType === "admin" || userType === "buyer" || userType === "agency") {
        return <Outlet />;
    }

    return <Navigate replace to="/" />;
}

export default ProtectedRoutes;