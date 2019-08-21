import React, { Component } from "react";
import Articles from "../components/Articles";
import "../styles/Home.css";

interface IState {
  selectedTab: string;
}

class Home extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      selectedTab: "artigos",
    };

    this.selectTab = this.selectTab.bind(this);
  }

  public selectTab(evt: any): void {
    this.setState({selectedTab: evt.target.id});
  }

  public render(): JSX.Element {
    let block: JSX.Element;
    switch (this.state.selectedTab) {
      case "artigos":
        block = <Articles />;
        break;
      default:
        block = <Articles />;
        break;
    }
    return (
      <div>
        <ul className="nav nav-tabs">
          <li id="artigos" className="active" onClick={this.selectTab} key={1}>Artigos</li>
          <li id="dicas" onClick={this.selectTab} key={2}>Dicas</li>
          <li id="forum" onClick={this.selectTab} key={3}>Fórum</li>
          <li id="scripts" onClick={this.selectTab} key={4}>Scripts</li>
        </ul>
        { block }
      </div>
    );
  }
}

export default Home;
