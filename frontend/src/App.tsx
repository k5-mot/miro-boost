import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthStart from "@/pages/auth/Auth0Start";
import AuthSignin from "@/pages/auth/Auth1Signin";
import AuthSigned from "@/pages/auth/Auth2Signed";
import AuthCheck from "@/pages/auth/Auth3Check";
import Config from "@/pages/config/Config";
import Miro from "@/pages/Miro";
import MiroTypography from "@/pages/miro/0-Typography";
import MiroGroup from "@/pages/miro/1-Group";
import MiroGroupCheck from "@/pages/miro/1-GroupCheck";
import MiroTask from "@/pages/miro/2-Task";
import MiroTaskCheck from "@/pages/miro/2-TaskCheck";
import Demo from "@/pages/miro/3-Demo";
import Root from "@/pages/Root";

/**
 * Routing component for the application.
 *
 * @returns {React.JSX.Element}
 */
const App: React.FC = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {/* トップ画面・認証画面 */}
        <Route path="/" element={<Root />} />
        <Route path="/miro" element={<Miro />} />
        {/* 設定画面 */}
        <Route path="/config/config" element={<Config />} />
        {/* 認証画面 */}
        <Route path="/auth/start" element={<AuthStart />} />
        <Route path="/auth/signin" element={<AuthSignin />} />
        <Route path="/auth/signed" element={<AuthSigned />} />
        <Route path="/auth/check" element={<AuthCheck />} />
        {/* 各機能画面 */}
        <Route path="/miro/typography" element={<MiroTypography />} />
        <Route path="/miro/group" element={<MiroGroup />} />
        <Route path="/miro/group-check" element={<MiroGroupCheck />} />
        <Route path="/miro/task" element={<MiroTask />} />
        <Route path="/miro/task-check" element={<MiroTaskCheck />} />
        <Route path="/miro/demo" element={<Demo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
