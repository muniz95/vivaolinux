import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header>
        <span>{this.props.loggedUser.name}</span>
        <Link to="/login">Login</Link>
      </header>
    );
  }
}

function mapStateToProps (state) {
  const { loggedUser } = state
  return {
    loggedUser
  }
}
    
export default connect(mapStateToProps, null)(Header);