import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "@/pages/App";
import Miro from "@/pages/Miro";
import Signin from "@/pages/auth/Signin";
import Signed from "@/pages/auth/Signed";
import Check from "@/pages/auth/Check";
import Splash from "@/pages/Splash";
import Config from "@/pages/config/Config";
import MiroTypography from "@/pages/miro/0-Typography";
import MiroGroup from "@/pages/miro/1-Group";
import MiroGroupCheck from "@/pages/miro/1-GroupCheck";
import MiroTask from "@/pages/miro/2-Task";
import MiroTaskCheck from "@/pages/miro/2-TaskCheck";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/miro" element={<Miro />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/config/config" element={<Config />} />
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signed" element={<Signed />} />
          <Route path="/auth/check" element={<Check />} />
          <Route path="/miro/typography" element={<MiroTypography />} />
          <Route path="/miro/group" element={<MiroGroup />} />
          <Route path="/miro/group-check" element={<MiroGroupCheck />} />
          <Route path="/miro/task" element={<MiroTask />} />
          <Route path="/miro/task-check" element={<MiroTaskCheck />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
