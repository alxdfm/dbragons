import Spinner from "../../components/Spinner";
import useLoginModel from "./model";
import "./styles.css";

function LoginView({
  email,
  password,
  isLoading,
  errorMessage,
  handleEmail,
  handlePassword,
  handleLoginButton,
}: ReturnType<typeof useLoginModel>) {
  return (
    <div className="container-login">
      <div className="presentation">
        <div className="image">
          <img src="dragon.svg" />
        </div>
        <p>Bem vindo ao DbRAGONS!</p>
      </div>
      <div className="inputs">
        <input value={email} onChange={(e) => handleEmail(e.target.value)} />
        <input
          value={password}
          type="password"
          onChange={(e) => handlePassword(e.target.value)}
        />
        <button onClick={() => handleLoginButton(email, password)}>
          {isLoading ? <Spinner /> : "Fazer login"}
        </button>
        {errorMessage ? <span>{errorMessage}</span> : null}
      </div>
    </div>
  );
}

export default LoginView;
