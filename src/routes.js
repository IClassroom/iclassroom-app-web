import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Class from "./pages/Class";

function Paths() {
  const [classTabState, setClassTabState] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header type="other" />
              <Home />
            </>
          }
        />
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
