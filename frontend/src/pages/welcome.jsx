import { useNavigate } from "react-router-dom";

export default function welcome() {
  const navigate = useNavigate();

  return (
    <div className="page center light-bg">
      <div className="card">
        <h2>Welcome to</h2>
        <h1 className="brand">RakshaAlert</h1>
        <p className="subtitle">Your personal safety companion.</p>

        <button onClick={() => navigate("/login")}>Login</button>
        <button className="secondary" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
