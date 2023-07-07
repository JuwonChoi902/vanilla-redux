import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/:id" element={<Detail></Detail>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
