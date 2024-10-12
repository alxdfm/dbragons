import useCreateDragonModel from "./model";
import CreateDragonView from "./view";

function CreateDragon() {
  const createDragonModel = useCreateDragonModel();
  return <CreateDragonView {...createDragonModel} />;
}

export default CreateDragon;
