import "./styles.css";

type ButtonType = {
  content: string | JSX.Element;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
};

function Button({ content, onClick, type }: ButtonType) {
  return (
    <button className="button-component" type={type} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
