import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="page center dark-bg">
      <div className="card">
        <h1>
          Login to <span className="brand">RakshaAlert</span>
        </h1>
        <p className="subtitle">
          Enter your credentials to access your account.
        </p>

        <label>Email</label>
        <input type="email" placeholder="name@example.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <button onClick={() => navigate("/sos")}>Login</button>

        <p className="footer-text">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
}
