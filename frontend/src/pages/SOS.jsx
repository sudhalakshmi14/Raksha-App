import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SOS() {
  const navigate = useNavigate();
  const [service, setService] = useState("Police");

  // 🔴 Vibrate Function
  const triggerVibration = () => {
    if ("vibrate" in navigator) {
      // Pattern: vibrate, pause, vibrate, pause, vibrate
      navigator.vibrate([300, 150, 300, 150, 500]);
    } else {
      alert("Vibration not supported on this device");
    }
  };

  return (
    <div className="page light-bg">

      {/* Header */}
      <div className="sos-header">
        <h2>Emergency Alert</h2>
        <div
          className="profile-icon"
          onClick={() => navigate("/profile")}
        >
          👤
        </div>
      </div>

      <p className="subtitle center-text">
        Select the service you need, then press and hold the SOS button.
      </p>

      {/* Services */}
      <div className="service-row">
        <div
          className={`service ${service === "Police" ? "active" : ""}`}
          onClick={() => setService("Police")}
        >
          🚓 Police
        </div>

        <div
          className={`service ${service === "Fire" ? "active" : ""}`}
          onClick={() => setService("Fire")}
        >
          🔥 Fire
        </div>

        <div
          className={`service ${service === "Ambulance" ? "active" : ""}`}
          onClick={() => setService("Ambulance")}
        >
          🚑 Ambulance
        </div>
      </div>

      {/* 🔴 SOS BUTTON */}
      <div className="sos-wrapper">
        <div
          className="sos-button"
          onClick={() => {
            triggerVibration();
            alert(`SOS sent to ${service}!`);
          }}
        >
          SOS
        </div>
      </div>

      <p className="center-text small-text">
        Press the button in case of an emergency.
      </p>
    </div>
  );
}
