import { SerendieSymbolPlaceholder } from "@serendie/symbols";
import { Button } from "@serendie/ui";
import { useNavigate } from "react-router-dom";
import { Title } from "@/components/typography";

const GenericTab: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title>汎用機能</Title>
      <Button
        leftIcon={<SerendieSymbolPlaceholder />}
        onClick={() => {
          void navigate("/miro/group");
        }}
        style={{ width: "100%" }}
      >
        要点まとめ
      </Button>
      <Button
        leftIcon={<SerendieSymbolPlaceholder />}
        onClick={() => {
          void navigate("/miro/task");
        }}
        style={{ width: "100%" }}
      >
        タスクの洗い出し
      </Button>
      <Button
        leftIcon={<SerendieSymbolPlaceholder />}
        onClick={() => {
          void navigate("/miro/typography");
        }}
        style={{ width: "100%" }}
      >
        意見のグルーピング
      </Button>
    </>
  );
};
export default GenericTab;
