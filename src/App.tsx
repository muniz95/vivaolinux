import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { PrivateRoutes, PublicRoutes } from './Routes';

interface IProps {
  auth: boolean;
}

interface IState {
  auth: boolean;
}

class App extends Component<IProps, {}> {
  public render(): JSX.Element {
    const routes: JSX.Element = this.props.auth ? <PrivateRoutes/> : <PublicRoutes />;
    return routes;
  }
}

function mapStateToProps(state: IState) {
  const { auth } = state;
  return {
    auth,
  };
}

export default connect(mapStateToProps, null)(App);
