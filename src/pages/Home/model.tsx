import { useEffect, useMemo, useState } from "react";
import DragonsService from "../../services/dragons";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../../utils/check-auth";

type DragonType = {
  id: string | number;
  name: string;
  type: string;
  histories?: string | [];
  createdAt: Date;
};

function useHomeModel() {
  const [dragons, setDragons] = useState<DragonType[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dragonsService = useMemo(() => new DragonsService(), []);

  const navigate = useNavigate();

  useEffect(() => {
    checkAuth(navigate);

    setIsLoading(true);
    getDragons();
    setIsLoading(false);
  }, [dragonsService]);

  const getDragons = () => {
    dragonsService
      .getDragons()
      .then((response) => setDragons(response))
      .catch((error) => setErrorMessage(error.message));
  };

  const deleteDragon = (id: string | number) => {
    dragonsService
      .deleteDragonById(id)
      .then(() => getDragons())
      .catch((error) => setErrorMessage(error.message));
  };

  return { dragons, errorMessage, isLoading, deleteDragon };
}

export default useHomeModel;
