import "./styles.css";

type ErrorMessageType = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageType) {
  return <span className="error-message-component">{message}</span>;
}

export default ErrorMessage;
