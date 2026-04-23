import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllFile from "./Pages/AllFile";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllFile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
