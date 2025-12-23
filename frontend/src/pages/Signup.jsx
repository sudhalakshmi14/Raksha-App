import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="page center dark-bg">
      <div className="card">
        <h1>Create an Account</h1>
        <p className="subtitle">
          Join <span className="brand">RakshaAlert</span> and stay safe.
        </p>

        <label>Full Name</label>
        <input type="text" placeholder="John Doe" />

        <label>Email</label>
        <input type="email" placeholder="name@example.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <label>Profile Photo</label>
        <input type="file" />

        <button onClick={() => navigate("/profile")}>Sign Up</button>
      </div>
    </div>
  );
}
