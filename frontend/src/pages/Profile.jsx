import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: "",
    age: "",
    address: "",
    contact: "",
    emergencyContact: ""
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log("Profile Data:", profile);
    alert("Profile saved successfully!");
  };

  return (
    <div className="page center light-bg">
      <div className="profile-card">

        {/* Avatar */}
        <div className="avatar">
          <img
            src="https://i.pravatar.cc/150"
            alt="Profile"
          />
        </div>

        <button className="upload-btn">📷 Upload Photo</button>

        {/* Name & Age */}
        <div className="form-row">
          <div>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              placeholder="30"
            />
          </div>
        </div>

        {/* Address */}
        <label>Home Address</label>
        <input
          type="text"
          name="address"
          value={profile.address}
          onChange={handleChange}
          placeholder="123 Main St, Anytown, USA"
        />

        {/* Contacts */}
        <div className="form-row">
          <div>
            <label>Contact Number</label>
            <input
              type="text"
              name="contact"
              value={profile.contact}
              onChange={handleChange}
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label>Emergency Contact</label>
            <input
              type="text"
              name="emergencyContact"
              value={profile.emergencyContact}
              onChange={handleChange}
              placeholder="(555) 765-4321"
            />
          </div>
        </div>

        <button className="primary-btn" onClick={handleSubmit}>
          Create Profile & Continue
        </button>

      </div>
    </div>
  );
}

