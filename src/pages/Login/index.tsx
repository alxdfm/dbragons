import useLoginModel from "./model";
import LoginView from "./view";

function Login() {
  const loginModel = useLoginModel();
  return <LoginView {...loginModel} />;
}

export default Login;
