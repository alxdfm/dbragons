import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./styles.css";

type DragonCardType = {
  id: string | number;
  name: string;
  type: string;
  histories?: string | [];
  createdAt: Date;
  deleteDragon: (id: string | number) => void;
};

function DragonCard({ id, name, deleteDragon }: DragonCardType) {
  const navigate = useNavigate();

  return (
    <div className="dragon-card-container">
      <div className="item-icon">
        <img src="dragon.svg" />
      </div>
      <div className="dragon-about">
        <div className="dragon-info">
          <div className="dragon-name">
            <span>
              <b>{name}</b>
            </span>
          </div>
        </div>
      </div>
      <div className="dragon-options">
        <Button
          content="Ver detalhes"
          onClick={() => navigate(`/dragon/${id}`)}
          type="button"
        />
        <Button
          content="Excluir"
          onClick={() => deleteDragon(id)}
          type="button"
        />
      </div>
    </div>
  );
}

export default DragonCard;
