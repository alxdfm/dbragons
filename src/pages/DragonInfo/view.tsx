import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { formatDate } from "../../utils/format-date";
import useDragonInfoModel from "./model";
import "./styles.css";

function DragonInfoView({
  dragon,
  isLoading,
  navigate,
}: ReturnType<typeof useDragonInfoModel>) {
  return (
    <div className="dragon-info-container">
      {isLoading ? (
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
                  <b>Nome:</b>&nbsp;{dragon && dragon.name}
                </span>
              </div>
              <div className="dragon-type">
                <span>
                  <b>Tipo:</b>&nbsp;{dragon && dragon.type}
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
          <Button
            content="Voltar"
            type="button"
            onClick={() => navigate("/home")}
          />
        </>
      )}
    </div>
  );
}

export default DragonInfoView;
