import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/Homepage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";

const App = () => (
  <div className="container is-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
