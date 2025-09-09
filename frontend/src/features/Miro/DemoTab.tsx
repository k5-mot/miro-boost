import { SerendieSymbolFileUpload, SerendieSymbolPen } from "@serendie/symbols";
import { Button } from "@serendie/ui";
import { useNavigate } from "react-router-dom";
import { Title } from "@/components/typography";

const DemoTab: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title>デモ機能</Title>

      <Button
        leftIcon={<SerendieSymbolPen />}
        onClick={() => {
          void navigate("/miro/typography");
        }}
        style={{ width: "100%" }}
      >
        Typography
      </Button>
      <Button
        leftIcon={<SerendieSymbolFileUpload />}
        onClick={() => {
          void navigate("/miro/demo");
        }}
        style={{ width: "100%" }}
      >
        FileDialog
      </Button>
    </>
  );
};
export default DemoTab;
