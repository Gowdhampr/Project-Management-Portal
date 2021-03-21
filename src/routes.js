// Home
import Project from "./views/Project";
import ProjectList from "./views/ProjectList";
import Login from "./views/Login";
import TeamLeadSignup from "./views/TeamLeadSignup";

// List of routes
const routes = [
  {
    path: "/project",
    exact: true,
    name: "Project",
    component: Project
  },
  {
    path: "/project/list",
    exact: true,
    name: "Project List",
    component: ProjectList
  },
  {
    path: "/login",
    exact: true,
    name: "Login",
    component: Login
  },
  {
    path: "/team-lead-signup",
    exact: true,
    name: "Team Lead Sign-up",
    component: TeamLeadSignup
  }
];

export default routes;
