import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Homepage } from "./components/Homepage";

import { SideBar } from "./components/SideBar";

import { TweetsBar } from "./components/TweetsBar";
import { LogIn } from "./components/LogIn";
import { ErorPage } from "./components/ErorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="row justify-content-start">
                <Routes>
                  <Route path="/" element={<LogIn />}></Route>
                  <Route path="/homepage" element={<Homepage />}></Route>
                  <Route
                    path="/narrative/:narrative"
                    element={<TweetsBar />}
                  ></Route>
                  <Route path="*" element={<ErorPage/>}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
