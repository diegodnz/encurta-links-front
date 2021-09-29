import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import FormLink from "./Views/FormLink/FormLink";
import GetLink from "./Views/GetLink/GetLink";

export default function Routes() {
  return (
    <Router>
      <Route component = { GetLink }  path="/:link" />
      <Route component = { FormLink }  path="/" exact />
    </Router>
  );
}