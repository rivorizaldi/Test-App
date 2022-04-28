import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "./Auth";

const index = () => {
  return (
    <Switch>
      <Route path="/login" component={Auth} />
      <Redirect to="/login" />
    </Switch>
  );
};

export default index;
