import "../styles/profile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="profile-wrapper">
      <form className="profile-card" onSubmit={handleSubmit}>
        <h2>Complete Your Safety Profile</h2>
        <p className="subtitle">
          This information helps us protect you during emergencies.
        </p>

        <div className="section">
          <h4>👤 Identity</h4>
          <input placeholder="Full Name" required />
          <input placeholder="Age" type="number" min="12" max="100" />
        </div>

        <div className="section">
          <h4>📞 Emergency Contacts</h4>
          <input placeholder="Your Contact Number" required />
          <input placeholder="Emergency Contact Number" required />
        </div>

        <div className="section">
          <h4>📍 Location</h4>
          <textarea placeholder="Home Address" />
        </div>

        {saved && <div className="success">✅ Profile saved successfully</div>}

        <button className="primary-btn">Save Safety Profile</button>

        <p className="privacy">
          🔒 Your information is securely stored and shared only during emergencies.
        </p>
      </form>
    </div>
  );
}
