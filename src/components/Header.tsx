import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

interface IProps {
  loggedUser: any;
}

interface IState {
  loggedUser: any;
}

class Header extends Component<IProps, IState> {
  public render(): JSX.Element {
    return (
      <header>
        <span>{this.props.loggedUser.name}</span>
        <Link to="/login">Login</Link>
      </header>
    );
  }
}

function mapStateToProps(state: IState) {
  const { loggedUser } = state;
  return {
    loggedUser,
  };
}

export default connect(mapStateToProps, null)(Header);
