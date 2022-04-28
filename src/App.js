import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import MainPage from "./features";
import AuthPage from "./features/Auth";

function App() {
  const { isAuthorize } = useSelector((state) => state.auth);
  return (
    <Switch>
      {!isAuthorize ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <AuthPage />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`) */
        <Redirect from="/login" to="/" />
      )}
      {/* <Route path="/error" component={NotFound} /> */}
      {!isAuthorize ? (
        /*Redirect to `/login` when user is not authorized*/
        <Redirect to="/login" />
      ) : (
        <MainPage />
      )}
    </Switch>
  );
}

export default App;
