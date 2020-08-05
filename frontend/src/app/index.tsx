import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Router, Switch, Route } from "react-router";
import { Home } from "app/containers/Home";
import { UnauthedRoute } from "app/components/UnauthedRoute";
import { Login } from "app/containers/Auth/Login";
import { RouteGuard, CompletedSignup } from "app/components/RouteGuard";
import { Admin } from "app/containers/Admin";
import { Signup } from "app/containers/Auth/Signup";
import { AuthedRoute } from "./components/AuthedRoute";


export const App = hot(({ history }: any) => (
  <Router history={history}>
    <Switch>
      {/* Signup / Login Paths */}
      <UnauthedRoute path="/signup" exact component={Signup} />
      <UnauthedRoute path="/login" exact component={Login} />
      <AuthedRoute path="/signout" exact component={Login} />
    </Switch>


    {/* App Stuff */}
    <Switch>
      <CompletedSignup path="/">
        <Route path="/app" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Route path="/test/test" exact component={Home} />

      </CompletedSignup>
    </Switch>

    <Switch>
      <RouteGuard path="/admin" allowedRoles={["admin"]}>
        <AuthedRoute path="/admin" exact component={Admin} />
      </RouteGuard>
    </Switch>
  </Router>
));
