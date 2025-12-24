import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/sos.css";

export default function SOS() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [triggered, setTriggered] = useState(false);

  const handleSOS = () => {
    if (!selected) return;

    setTriggered(true);

    setTimeout(() => {
      setTriggered(false);
    }, 3000);
  };

  return (
    <div className="sos-page">
      {/* TOP BAR */}
      <header className="top-bar">
        <div className="menu">☰ <span>Home</span></div>

        <div className="right-icons">
          <span className="dot green"></span>
          <span className="profile-icon" onClick={() => navigate("/profile")}>
            👤
          </span>
        </div>
      </header>

      {/* SOS BUTTON */}
      <div className="main-sos">
        <button
          className={`sos-circle ${selected ? "enabled" : ""}`}
          onClick={handleSOS}
        >
          <span className="sos-text">Active</span>
          <span className="sos-icon">🚨</span>
          <span className="sos-text">Assailant</span>
        </button>
      </div>

      {/* OPTIONS */}
      <div className="options">
        {["Fire", "Police", "Ambulance", "Other"].map((item) => (
          <div
            key={item}
            className={`option ${selected === item ? "selected" : ""}`}
            onClick={() => setSelected(item)}
          >
            <span className="emoji">
              {item === "Fire" && "🔥"}
              {item === "Police" && "🛡️"}
              {item === "Ambulance" && "🚑"}
              {item === "Other" && "📞"}
            </span>
            <p>{item}</p>
          </div>
        ))}
      </div>

      {/* POPUP MESSAGE */}
      {triggered && (
        <div className="toast">
          🚨 SOS sent for <b>{selected}</b>. Help is on the way.
        </div>
      )}
    </div>
  );
}
