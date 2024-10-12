import "./styles.css";

type ButtonType = {
  content: string | JSX.Element;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

function Button({ content, onClick, type, disabled }: ButtonType) {
  return (
    <button
      className="button-component"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default Button;
