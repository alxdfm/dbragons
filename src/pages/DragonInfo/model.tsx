import { useEffect, useMemo, useState } from "react";
import DragonsService from "../../services/dragons";
import { useNavigate, useParams } from "react-router-dom";
import { checkAuth } from "../../utils/check-auth";

type DragonInfoType = {
  name: string;
  type: string;
  histories?: string | [];
  createdAt: Date;
};

function useDragonInfoModel() {
  const [dragon, setDragon] = useState<DragonInfoType | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const dragonsService = useMemo(() => new DragonsService(), []);

  useEffect(() => {
    checkAuth(navigate);
    setIsLoading(true);

    dragonsService
      .getDragonById(id!)
      .then((response) => setDragon(response))
      .catch((error) => setErrorMessage(error.message));
    setIsLoading(false);
  }, [dragonsService, id, navigate]);

  return {
    dragon,
    errorMessage,
    isLoading,
    navigate,
  };
}

export default useDragonInfoModel;
