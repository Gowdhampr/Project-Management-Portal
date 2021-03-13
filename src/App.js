import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

/** Layouts **/
import DefaultLayout from "./containers/DefaultLayout";

// Views
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import TeamLeadSignup from "./views/TeamLeadSignup";

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
              name="Dashboard"
              path="/"
              component={Dashboard}
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
