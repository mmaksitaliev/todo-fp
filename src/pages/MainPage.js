import React, { Component } from "react";
import Sidebar from "components/Sidebar";
import Content from "components/Content";
import { routes } from "App";

export default class MainPage extends Component {
  render() {
    return (
      <main className="app">
        <Sidebar links={routes} />
        <Content />
      </main>
    );
  }
}
