import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import ClassActivities from "./pages/ClassActivities";
import ClassDoubts from "./pages/ClassDoubts";
import ClassPost from "./pages/ClassPost";

function Paths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/class-activities" element={<ClassActivities />} />
        <Route path="/class-post" element={<ClassPost />} />
        <Route path="/class-doubts" element={<ClassDoubts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Paths;
