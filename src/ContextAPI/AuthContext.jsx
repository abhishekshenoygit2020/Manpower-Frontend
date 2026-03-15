import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationStore from "../Utils/LocalStorageUtil";
// import axios from "../api/axios";
// const LOGOUT_URL = './auth/logout';

export const AuthContext = createContext({
  user: null,
  loginFn: (user) => { },
  logout: () => { }
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [userType, setUserType] = useState('');
  const [sidebarItemIndex, setSidebarItemIndex] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(''); 
  const url = "http://localhost:3006";
  // const url = "https://sl.synchash.in";


  const loginFn = userData => {
    console.log(userData);
    setUserType(userData.userType);
    setUserEmail(userData.userEmail);

    ApplicationStore().setStorage('token', userData.userToken);
    ApplicationStore().setStorage('userType', userData.userType);
    ApplicationStore().setStorage('userEmail', userData.userEmail);
    ApplicationStore().setStorage("isLoggedIn", "true");
    // ApplicationStore().setStorage('sideBarIndex', 0);
    setLoggedIn(true);
  }

  const Logout = async () => {
    console.log("Logging out...");
    ApplicationStore().removeStorage('token');
    ApplicationStore().removeStorage('userType');
    ApplicationStore().removeStorage('userEmail');
    ApplicationStore().removeItem("isLoggedIn");

    setUser(null);
    setLoggedIn(false);
    // navigate("/login");
  }

  return (
    <AuthContext.Provider value={{ user, loginFn, userType, loggedIn, Logout, userEmail }}>
      {children}
    </AuthContext.Provider>
  )

}

export function useAuthContext() {
  const { user, loginFn, userType, loggedIn, Logout, userEmail } = useContext(AuthContext);``
  return { user, loginFn, userType, loggedIn, Logout, userEmail };
}