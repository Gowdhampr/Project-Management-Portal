import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import HeaderNav from "../../components/core/HeaderNav";

// routes config
import routes from "../../routes";

export default function DefaultLayout() {
  return (
    <div className="app">
      <div className="app-body">
        <HeaderNav />
        <main className="container">
          <Suspense>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => <route.component {...props} />}
                  />
                ) : null;
              })}
            </Switch>
          </Suspense>
        </main>
      </div>
    </div>
  )
}

