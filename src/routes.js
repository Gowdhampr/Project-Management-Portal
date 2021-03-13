// Home
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";

// List of routes
const routes = [
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/login",
    exact: true,
    name: "Login",
    component: Login
  }
];

export default routes;
