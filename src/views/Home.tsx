import React, { Component } from "react";
import styled, { StyledComponent } from "styled-components";
import Articles from "../components/Articles";
import "../styles/Home.css";

interface IState {
  selectedTab: string;
}

interface ITabItemProps {
  active: boolean;
}

const TabBar: StyledComponent<"ul", any, {}> = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const TabItem: StyledComponent<"li", any, ITabItemProps> = styled.li`
  display: block;
  background-color: ${(p: ITabItemProps) => p.active ? "black" : "white"};
  color: ${(p: ITabItemProps) => p.active ? "white" : "black"};
`;

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
    const tabs: JSX.Element =
      <TabBar>
        <TabItem id="artigos" active={this.state.selectedTab === "artigos"} onClick={this.selectTab}>Artigos</TabItem>
        <TabItem id="dicas" active={this.state.selectedTab === "dicas"} onClick={this.selectTab}>Dicas</TabItem>
        <TabItem id="forum" active={this.state.selectedTab === "forum"} onClick={this.selectTab}>Fórum</TabItem>
        <TabItem id="scripts" active={this.state.selectedTab === "scripts"} onClick={this.selectTab}>Scripts</TabItem>
      </TabBar>;
    switch (this.state.selectedTab) {
      case "artigos":
        block = <Articles />;
        break;
      default:
        block = <Articles />;
        break;
    }
    return (
      <React.Fragment>
        { tabs }
        { block }
      </React.Fragment>
    );
  }
}

export default Home;
