import React from "react";
import { Route, Routes } from "react-router-dom";
import LinkList from "./components/LinkList";
import CreateLink from "./components/CreateLink";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route exact path="/" element={<LinkList />} />
          <Route exact path="/create" element={<CreateLink />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
