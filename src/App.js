import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LinkList from "./components/LinkList";
import CreateLink from "./components/CreateLink";
import Header from "./components/Header";
import Login from "./components/Login";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/new/1" />} />
          <Route exact path="/create" element={<CreateLink />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/top" element={<LinkList />} />
          <Route exact path="/new/:page" element={<LinkList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
