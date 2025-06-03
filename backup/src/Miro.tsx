import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { Container } from "styled-system/jsx";
import { MiroSDKInit } from "@/components/MiroSDKInit";

function Miro() {
  return (
    <Container>
      <MiroSDKInit />

      <p>/miro</p>
      <img src={reactLogo} alt="React Logo" />
      <img src={viteLogo} alt="Vite Logo" />
    </Container>
  );
}

export default Miro;
