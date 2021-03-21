import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

/** Layouts **/
import DefaultLayout from "./containers/DefaultLayout";

// Views
import Project from "./views/Project";
import ProjectList from "./views/ProjectList";
import Login from "./views/Login";
import TeamLeadSignup from "./views/TeamLeadSignup";
import ProjectDetails from "./views/Project/ProjectDetails";

/*
   App Content
*/
function App() {
  return (
    <div>
      <ToastContainer />
      <div className="routeSection">
        <Router>
          <Switch>
            <DefaultLayout
              exact
              name="Project"
              path="/project"
              component={Project}
            />
            <DefaultLayout
              exact
              name="Project List"
              path="/project/list"
              component={ProjectList}
            />
            <DefaultLayout
              exact
              name="Project Details"
              path="/project/:id"
              component={ProjectDetails}
            />
            <DefaultLayout
              exact
              name="Login"
              path="/login"
              component={Login}
            />
            <DefaultLayout
              exact
              name="Team Lead Sing-up"
              path="/team-lead-signup"
              component={TeamLeadSignup}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
