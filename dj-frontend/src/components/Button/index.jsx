import "./style.css";

export default function Button({ children, style, action }) {
  return (
    <button style={style} className="button" onClick={action}>
      <div>{children}</div>
    </button>
  );
}
