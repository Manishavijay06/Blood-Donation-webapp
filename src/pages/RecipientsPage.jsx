import "../styles/RecipientsPage.css";
import { useState } from "react";

export default function RecipientsPage() {
  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    unitsNeeded: "",
    hospitalName: "",
    hospitalLocation: "",
    emergencyContact: "",
    urgencyLevel: "low",
    additionalMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., show a success message)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="Recipients__Form-container">
      <div className="Recipients__Form-header">
        <h1>Blood Request</h1>
        <p>Submit a request for blood donation. We'll notify matching donors immediately.</p>
      </div>
      <form className="Recipients__Form" onSubmit={handleSubmit}>
        <div className="Recipients__InputRow">
          <label>Patient's Name</label>
          <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required />
        </div>
        <div className="Recipients__InputRow">
          <label>Required Blood Group</label>
          <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
        </div>
        <div className="Recipients__InputRow">
          <label>Units Needed</label>
          <input type="number" name="unitsNeeded" value={formData.unitsNeeded} onChange={handleChange} required />
        </div>
        <div className="Recipients__InputRow">
          <label>Hospital Name</label>
          <input type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} required />
        </div>
        <div className="Recipients__InputRow">
          <label>Hospital Location</label>
          <input type="text" name="hospitalLocation" value={formData.hospitalLocation} onChange={handleChange} required />
        </div>
        <div className="Recipients__InputRow">
          <label>Emergency Contact</label>
          <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} required />
        </div>
        <div className="Recipients__InputRow">
          <label>Urgency Level</label>
          <select name="urgencyLevel" value={formData.urgencyLevel} onChange={handleChange} required>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="critical">Critical</option>
          </select>
        </div>
        <div className="Recipients__InputRow">
          <label>Additional Message (optional)</label>
          <textarea name="additionalMessage" value={formData.additionalMessage} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Request Blood</button>
      </form>
    </div>
  );
}