import { useEffect } from "react";
import type { Miro } from "@mirohq/websdk-types";
declare const miro: Miro;

export const MiroSDKInit = () => {
  useEffect(() => {
    miro.board.ui.on("icon:click", async () => {
      await miro.board.ui.openPanel({ url: "/miro" });
    });
  });

  return null;
};
