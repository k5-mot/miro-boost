import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import Miro from "./pages/Miro";
import Signin from "./pages/auth/Signin";
import MiroGroup from "./pages/miro/1-Group";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/miro" element={<Miro />} />
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/miro/group" element={<MiroGroup />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
