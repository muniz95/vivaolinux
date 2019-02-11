import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PublicRoutes, PrivateRoutes } from './Routes';
import './App.css';

class App extends Component {
  render() {
    console.log('autenticação', this.props.auth);
    const routes = this.props.auth ? <PrivateRoutes/> : <PublicRoutes />;
    return routes;
  }
}

function mapStateToProps (state) {
  const { auth } = state
  return {
    auth
  }
}

export default connect(mapStateToProps, null)(App);
