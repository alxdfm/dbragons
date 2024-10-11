import { NavigateFunction } from "react-router-dom";

export const checkAuth = (navigate: NavigateFunction) => {
  if (localStorage.getItem("logged") !== "true") {
    console.log("Usuário não logado");
    return navigate("/login");
  }
}