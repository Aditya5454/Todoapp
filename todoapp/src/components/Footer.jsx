import "./Footer.css";
export default function Footer({ completedTodos ,totalTodos }) {
  return (
    <div className="count">
      <span className="item">completed:{completedTodos}</span>
      <span className="item">Remaining:{totalTodos}</span>
    </div>
  );
}
