import Button from "../../components/Button";
import Input from "../../components/Input";
import useCreateDragonModel from "./model";
import "./styles.css";

function CreateDragonView({
  navigate,
  handleChangeName,
  handleChangeType,
  handleChangeHistories,
  name,
  type,
  histories,
  handleCreateButton,
}: ReturnType<typeof useCreateDragonModel>) {
  return (
    <div className="container-create-dragon">
      <div className="image">
        <img src="/dragon.svg" />
      </div>
      <h1>Crie seu dragão:</h1>
      <form
        className="form-dragon"
        onSubmit={(event) => handleCreateButton(event)}
      >
        <div>
          <span>Nome:</span>
          <Input value={name} onChange={handleChangeName} />
        </div>
        <div>
          <span>Tipo:</span>
          <Input value={type} onChange={handleChangeType} />
        </div>
        <div>
          <span>História:</span>
          <Input value={histories} onChange={handleChangeHistories} />
        </div>

        <Button content="Salvar" type="submit" />
      </form>
      <Button
        content="Voltar"
        type="button"
        onClick={() => navigate("/home")}
      />
    </div>
  );
}

export default CreateDragonView;
