import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import withAuthentication from "../Session/withAuthentication";
import * as routes from "../../constants/routes";
import StudentsPage from "../Students";
import Student from "../Student";
import "./index.css";
import { Container, Row, Col } from "reactstrap";
import Footer from "../Footer";
import NewJobForm from "../NewJob";
import Jobs from "../Jobs";
import Job from "../Job";
import AboutPage from "../About";
const App = () => (
  <Router>
    <div className="app">
      <Navigation />
      <Container>
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route
          exact
          path={routes.PASSWORD_FORGET}
          component={() => <PasswordForgetPage />}
        />
        <Route exact path={routes.HOME} component={() => <HomePage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        <Route exact path={routes.NEWJOB} component={() => <NewJobForm />} />

        <Route
          exact
          path={routes.STUDENTS}
          component={() => <StudentsPage />}
        />
        <Route exact path="/students/:username" component={Student} />
        <Route exact path="/jobs/:url" component={Job} />
        <Route exact path={routes.JOBS} component={() => <Jobs />} />
        <Route exact path={routes.ABOUT} component={() => <AboutPage/>} />
        <hr />

        <Footer />
      </Container>
    </div>
  </Router>
);

export default withAuthentication(App);
