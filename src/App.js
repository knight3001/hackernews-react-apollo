import React from "react";
import LinkList from "./components/LinkList";
import CreateLink from "./components/CreateLink";
import "./App.css";

function App() {
  return (
    <>
      <CreateLink />
      <LinkList />
    </>
  );
}

export default App;
