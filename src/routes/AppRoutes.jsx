import { createBrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Dashboard from "../features/dashboard/DashboardPage";
import Profile from "../Pages/Profile.jsx";
import Tables from "../features/table/Tables";
import Analytics from "../features/analytics/Analytics";
import Notifications from "../features/notification/Notifications";
import Logs from "../features/usersLog/Logs.jsx";
import Login from "../features/login/Login.jsx";
import Signup from "../features/signup/Signup.jsx";
import ManpowerRequirement from "../Pages/ManpowerRequirement.jsx";
import PageNotFound from "../404-Error/PageNotFound";
import ProtectedRoute from "../routes/ProtectedRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route index path="/Dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/logs" element={<Logs />} />
        </Route>
      </Route>
    </Routes>
  );

};

export default MainRoutes;

// export const router = createBrowserRouter([
//   { path: "/login", element: <Login /> },
//   { path: "/signup", element: <Signup /> },
//   {
//     path: "/",
//     element: <ProtectedRoute />, // Protect all routes inside
//     children: [
//       {
//         element: <Layout />, // Layout includes Sidebar
//         children: [
//           { path: "/", element: <Dashboard /> },
//           { path: "/profile", element: <Profile /> },
//           { path: "/tables", element: <Tables /> },
//           { path: "/analytics", element: <Analytics /> },
//           { path: "/notifications", element: <Notifications /> },
//           { path: "/logs", element: <Logs /> },
//           { path: "/postrequirement", element: <ManpowerRequirement /> },
//           { path: "*", element: <PageNotFound /> },
//         ],
//       },
//     ],
//   },
// ]);