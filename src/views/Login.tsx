import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { login, setUser } from "../redux/actions";
import "../styles/Login.css";

interface IProps extends RouteComponentProps<any> {
  auth: any;
  dispatchLogin: () => void;
  dispatchSetUser: (user: any) => void;
}

interface IState {
  password: string;
  username: string;
}

class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      password: "",
      username: "",
    };

    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public login(evt: any): void {
    evt.stopPropagation();
    evt.preventDefault();
    this.props.dispatchLogin();
    this.props.dispatchSetUser({name: this.state.username});
    this.props.history.push("/");
  }

  public handleChange(evt: any): void {
    const key: string = evt.target.id;
    const value: string = evt.target.value;
    if (key === "password") {
      this.setState({password: value});
    } else {
      this.setState({username: value});
    }
  }

  public render(): JSX.Element {
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

const mapDispatchToProps = {
  dispatchLogin: login,
  dispatchSetUser: setUser,
};

export default connect(null, mapDispatchToProps)(Login);
