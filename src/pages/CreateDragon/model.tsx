import { useEffect, useMemo, useState } from "react";
import { checkAuth } from "../../utils/check-auth";
import { useNavigate } from "react-router-dom";
import DragonsService from "../../services/dragons";
import { DragonInfoType } from "../DragonInfo/model";

function useCreateDragonModel() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [histories, setHistories] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dragonsService = useMemo(() => new DragonsService(), []);

  const navigate = useNavigate();

  useEffect(() => {
    checkAuth(navigate);
  });

  const handleChangeName = (name: string) => {
    setName(name);
  };

  const handleChangeType = (type: string) => {
    setType(type);
  };

  const handleChangeHistories = (histories: string) => {
    setHistories(histories);
  };

  const handleCreateButton = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      dragonsService
        .createDragon({ name, type, histories } as DragonInfoType)
        .then(() => navigate("/home"))
        .catch((error) => setErrorMessage(error.message));
    } catch (error) {
      console.warn(error);
      setErrorMessage("Falha ao criar dragão!");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleChangeName,
    handleChangeType,
    handleChangeHistories,
    name,
    type,
    histories,
    navigate,
    handleCreateButton,
  };
}

export default useCreateDragonModel;
