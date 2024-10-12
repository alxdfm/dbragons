import Button from "../../components/Button";
import ErrorMessage from "../../components/ErrorMessage";
import Input from "../../components/Input";
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
      <form className="inputs" onSubmit={(event) => handleLoginButton(event)}>
        <Input value={email} onChange={handleEmail} />
        <Input value={password} type="password" onChange={handlePassword} />
        <Button
          content={isLoading ? <Spinner /> : "Fazer login"}
          type="submit"
          disabled={isLoading}
        />
        {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
      </form>
    </div>
  );
}

export default LoginView;
