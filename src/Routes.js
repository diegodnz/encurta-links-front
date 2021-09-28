import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from "./Views/Home/Home";

export default function Routes() {
  return (
    <Router>
      <Route component = { Home }  path="/:link" />
    </Router>
  );
}