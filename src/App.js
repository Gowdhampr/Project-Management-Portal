import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Style
import "./App.css";

/** Layouts **/
import DefaultLayout from "./containers/DefaultLayout";

// Views
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";

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
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
