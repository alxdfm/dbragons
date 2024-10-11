import useDragonInfoModel from "./model";
import "./styles.css";
import DragonInfoView from "./view";

function DragonInfo() {
  const dragonInfoModel = useDragonInfoModel();
  return <DragonInfoView {...dragonInfoModel} />;
}

export default DragonInfo;
