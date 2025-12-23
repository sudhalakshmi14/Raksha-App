import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="page center light-bg">
      <div className="card">
        <div className="icon">🛡️</div>
        <h1 className="brand">RakshaAlert</h1>
        <p className="subtitle">
          Your personal safety companion, always by your side.
        </p>
        <button onClick={() => navigate("/welcome")}>
          Get Started
        </button>
      </div>
    </div>
  );
}
