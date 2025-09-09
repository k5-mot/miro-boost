import { SerendieSymbolPlaceholder } from "@serendie/symbols";
import { Button } from "@serendie/ui";
import { useNavigate } from "react-router-dom";
import { Title } from "@/components/typography";

const ScrumTab: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title>スクラム機能</Title>
      <Button
        leftIcon={<SerendieSymbolPlaceholder />}
        onClick={() => {
          void navigate("/miro/group");
        }}
        style={{ width: "100%" }}
      >
        プロダクトバックログの作成
      </Button>
      <Button
        leftIcon={<SerendieSymbolPlaceholder />}
        onClick={() => {
          void navigate("/miro/task");
        }}
        style={{ width: "100%" }}
      >
        スプリントバックログを作成
      </Button>
      <Button
        leftIcon={<SerendieSymbolPlaceholder />}
        onClick={() => {
          void navigate("/miro/typography");
        }}
        style={{ width: "100%" }}
      >
        プロダクトバックログアイテムを詳細化
      </Button>
    </>
  );
};
export default ScrumTab;
