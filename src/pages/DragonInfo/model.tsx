import { useEffect, useMemo, useState } from "react";
import DragonsService from "../../services/dragons";
import { useNavigate, useParams } from "react-router-dom";
import { checkAuth } from "../../utils/check-auth";

export type DragonInfoType = {
  name: string;
  type: string;
  histories?: string | [];
  createdAt: Date;
};

function useDragonInfoModel() {
  const [dragon, setDragon] = useState<DragonInfoType | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const dragonsService = useMemo(() => new DragonsService(), []);

  useEffect(() => {
    checkAuth(navigate);
    getDragon();
  }, [dragonsService, id, navigate]);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const getDragon = () => {
    dragonsService
      .getDragonById(id!)
      .then((response) => setDragon(response))
      .catch((error) => setErrorMessage(error.message));
  };

  const handleChangeDragonName = (value: string) => {
    setDragon((prev) => {
      return prev && { ...prev, name: value };
    });
  };

  const handleChangeDragonType = (value: string) => {
    setDragon((prev) => {
      return prev && { ...prev, type: value };
    });
  };

  const onClickSave = () => {
    try {
      setIsLoading(true);
      dragonsService
        .updateDragonById(id!, dragon!)
        .then(() => getDragon())
        .catch((error) => setErrorMessage(error.message));
    } catch (error) {
      console.warn(error);
      setErrorMessage("Falha ao editar dragão!");
    } finally {
      setIsLoading(false);
      setIsEditing(false);
    }
  };

  return {
    dragon,
    errorMessage,
    isLoading,
    isEditing,
    navigate,
    handleChangeDragonName,
    handleChangeDragonType,
    toggleEdit,
    onClickSave,
  };
}

export default useDragonInfoModel;
