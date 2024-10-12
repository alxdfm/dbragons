import _ from "lodash";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Spinner from "../../components/Spinner";
import { formatDate } from "../../utils/format-date";
import useDragonInfoModel from "./model";
import "./styles.css";
import ErrorMessage from "../../components/ErrorMessage";

function DragonInfoView({
  dragon,
  isLoading,
  errorMessage,
  navigate,
  handleChangeDragonName,
  handleChangeDragonType,
  toggleEdit,
  isEditing,
  onClickSave,
}: ReturnType<typeof useDragonInfoModel>) {
  return (
    <div className="dragon-info-container">
      {isLoading || _.isEmpty(dragon) ? (
        <Spinner />
      ) : (
        <>
          <div className="item-icon-info">
            <img src="/dragon.svg" />
          </div>
          <div className="dragon-about-info">
            <div className="dragon-info-info">
              <div className="dragon-name-info">
                <span>
                  <b>Nome:</b>&nbsp;
                  {isEditing ? (
                    <Input
                      value={dragon!.name}
                      onChange={handleChangeDragonName}
                    />
                  ) : (
                    dragon && dragon.name
                  )}
                </span>
              </div>
              <div className="dragon-type">
                <span>
                  <b>Tipo:</b>&nbsp;
                  {isEditing ? (
                    <Input
                      value={dragon!.type}
                      onChange={handleChangeDragonType}
                    />
                  ) : (
                    dragon && dragon.type
                  )}
                </span>
              </div>
            </div>
            <div className="dragon-created-at">
              <span>
                <b>Data de criação:</b>&nbsp;
                {dragon && formatDate(dragon.createdAt)}
              </span>
            </div>
          </div>
          {isEditing ? (
            <Button
              content="Salvar"
              type="button"
              onClick={onClickSave}
              disabled={isLoading}
            />
          ) : (
            <Button
              content="Editar"
              type="button"
              onClick={() => toggleEdit()}
            />
          )}
          {isEditing ? (
            <Button
              content="Cancelar"
              type="button"
              onClick={() => toggleEdit()}
            />
          ) : (
            <Button
              content="Voltar"
              type="button"
              onClick={() => navigate("/home")}
            />
          )}
          {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
        </>
      )}
    </div>
  );
}

export default DragonInfoView;
