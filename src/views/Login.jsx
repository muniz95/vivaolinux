import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, setUser } from '../redux/actions';
import '../styles/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: ''
    }
    
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  login(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.props.dispatchLogin();
    this.props.dispatchSetUser({name: this.state.username});
    this.props.history.push('/');
  }
  
  handleChange(evt) {
    this.setState({[evt.target.id]: evt.target.value});
  }
  
  render() {
    return (
      <form onSubmit={this.login}>
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" value={this.state.username} onChange={this.handleChange} />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
        <hr/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: () => {
    dispatch(login())
  },
  dispatchSetUser: (user) => {
    dispatch(setUser(user))
  }
});

export default connect(null, mapDispatchToProps)(Login);