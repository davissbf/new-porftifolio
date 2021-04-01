import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import BlogsPage from '../pages/BlogsPage';
import ContactPage from '../pages/ContactPage';
import PortifolioPage from '../pages/PortifolioPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/portfolios">
          <PortifolioPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/blogs">
          <BlogsPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}
