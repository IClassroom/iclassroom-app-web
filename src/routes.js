import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Class from "./pages/Class";
import Header from "./components/Header"

function Paths() {
  const [classTabState, setClassTabState] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/turma"
          element={
            <>
              <Header
                classTabState={classTabState}
                setClassTabState={setClassTabState}
                type="class"
              />
              <Class classTabState={classTabState} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Paths;
