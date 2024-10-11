import "./styles.css";

type InputType = {
  value: string;
  onChange: (e: string) => void;
  type?: string;
};

function Input({ value, onChange, type }: InputType) {
  return (
    <input
      className="input-component"
      value={value}
      type={type}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
