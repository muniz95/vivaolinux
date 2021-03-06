import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './views/Dashboard';
import Home from './views/Home';
import Login from './views/Login';

export const PublicRoutes = () => (
  <Router>
    <Header />
    <div id="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Suspense>
    </div>
    <Footer />
  </Router>
);

export const PrivateRoutes = () => (
  <Router>
    <Header />
    <div id="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
        </Switch>
      </Suspense>
    </div>
    <Footer />
  </Router>
);