import * as React from "react";
import { useEffect } from "react";
import { Container, Flex } from "../../../styled-system/jsx";

import "../../assets/style.css";

const Signed: React.FC = () => {
  useEffect(() => {
    const fetchAuthUrl = async () => {
      // 認証後、3秒待機した後、モーダルを閉じる
      const timeoutId = setTimeout(() => {
        (async () => {
          await miro.board.ui.closeModal();
        })();
      }, 3000);
    };
    fetchAuthUrl();
  }, []);

  return (
    <Container
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        backgroundImage: 'url("/src/assets/portrait_auth.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Flex
        width="100%"
        height="100%"
        gap={8}
        direction="column"
        align="center"
        justify="center"
      >
        <Flex
          width="90%"
          direction="column"
          align="center"
          style={{
            borderRadius: "64px",
            backdropFilter: "blur(128px)",
            padding: "16px",
          }}
        >
          <img
            src="/src/assets/congratulations.png"
            alt=""
            style={{
              height: "50vh",
              width: "auto",
              borderRadius: "64px",
              backdropFilter: "blur(64px)",
            }}
          />
          <h4>Completed to install</h4>
        </Flex>
      </Flex>
    </Container>
  );
};
export default Signed;
