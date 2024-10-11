import { useEffect, useState } from "react";
import { checkMockedUser } from "../../utils/mocked-user";
import { useNavigate } from "react-router-dom";

function useLoginModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = localStorage.getItem("logged") === "true";
    if (isLogged) {
      navigate("/home");
    }
  });

  const handleEmail = (email: string) => {
    setEmail(email);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleLoginButton = (email: string, password: string) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      if (checkMockedUser(email, password)) {
        localStorage.setItem("logged", "true");
        console.log("Usuário mockado logado");
        return navigate("/home");
      }

      throw Error("Erro ao logar!");
    } catch (error) {
      console.warn(error);
      setErrorMessage("Email ou senha incorretas!");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    handleEmail,
    handlePassword,
    handleLoginButton,
    isLoading,
    errorMessage,
  };
}

export default useLoginModel;
