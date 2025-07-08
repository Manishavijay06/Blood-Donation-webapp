import { useState, useEffect } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import "../styles/ProfileForm.css";
import ProtectedRoute from "./ProtectedRoute";

export default function ProfileForm({ donorData, currentUser }) {
    const [userFormData, setUserFormData] = useState({
        name: "",
        bloodGroup: "",
        email: "",
        phoneNumber: "",
        age: "",
        weight: "",
        location: "",
        medicalHistory: "",
    });
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (donorData) {
            setUserFormData({
                name: donorData.name || "",
                bloodGroup: donorData.bloodGroup || "",
                email: donorData.email || "",
                phoneNumber: donorData.phoneNumber || "",
                age: donorData.age || "",
                weight: donorData.weight || "",
                location: donorData.location || "",
                medicalHistory: donorData.medicalHistory || "",
            });
        }
    }, [donorData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleEdit = () => {
        setEditMode(true);
        setSuccess("");
        setError("");
    };

    const handleCancel = () => {
        if (donorData) {
            setUserFormData({
                name: donorData.name || "",
                bloodGroup: donorData.bloodGroup || "",
                email: donorData.email || "",
                phoneNumber: donorData.phoneNumber || "",
                age: donorData.age || "",
                weight: donorData.weight || "",
                location: donorData.location || "",
                medicalHistory: donorData.medicalHistory || "",
            });
        }
        setEditMode(false);
        setError("");
        setSuccess("");
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            const db = getFirestore();
            const userDoc = doc(db, "users", currentUser.uid);
            await updateDoc(userDoc, userFormData);
            setSuccess("Profile updated successfully!");
            setEditMode(false);
        } catch (err) {
            setError("Failed to update profile. Please try again.");
            console.error("Firestore update error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Donorprofile__Profile-form">
            <div className="Donorprofile__Form-header">
                <div className="Donorprofile__Donor-head">Donor Profile</div>
                <div className="Donorprofile__Donor-desc">Complete your profile to help us match you with recipients</div>
            </div>
            <form className="Donorprofile__Frame1" onSubmit={handleSave}>
                <div className="Donorprofile__InputRow">
                    <div className="Donorprofile__InputField">
                        <div className="Donorprofile__LabelStack">Full Name</div>
                        <div className="Donorprofile__TextInput">
                            <input type="text" name="name" value={userFormData.name} onChange={handleChange} placeholder="Enter your Name" required readOnly={!editMode} />
                        </div>
                    </div>
                    <div className="Donorprofile__InputField">
                        <div className="Donorprofile__LabelStack">Blood Type</div>
                        <div className="Donorprofile__TextInput">
                            <select name="bloodGroup" value={userFormData.bloodGroup} onChange={handleChange} required disabled={!editMode}>
                                <option value="">Select your blood type</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="Donorprofile__InputRow">
                    <div className="Donorprofile__InputField">
                        <div className="Donorprofile__LabelStack">Email</div>
                        <div className="Donorprofile__TextInput">
                            <input type="email" name="email" value={userFormData.email} onChange={handleChange} placeholder="Enter your Email" required readOnly={!editMode} />
                        </div>
                    </div>
                    <div className="Donorprofile__InputField">
                        <div className="Donorprofile__LabelStack">Phone Number</div>
                        <div className="Donorprofile__TextInput">
                            <input type="tel" name="phoneNumber" value={userFormData.phoneNumber} onChange={handleChange} autoComplete="off" placeholder="Enter your Phone Number" required readOnly={!editMode} />
                        </div>
                    </div>
                </div>
                <div className="Donorprofile__InputRow">
                    <div className="Donorprofile__InputField">
                        <div className="Donorprofile__LabelStack">Age</div>
                        <div className="Donorprofile__TextInput">
                            <input type="number" name="age" value={userFormData.age} onChange={handleChange} placeholder="Enter your Age" min="18" max="65" required readOnly={!editMode} />
                        </div>
                    </div>
                    <div className="Donorprofile__InputField">
                        <div className="Donorprofile__LabelStack">Weight (in kg)</div>
                        <div className="Donorprofile__TextInput">
                            <input type="number" name="weight" value={userFormData.weight} onChange={handleChange} placeholder="Enter your weight" autoComplete="off" required readOnly={!editMode} />
                        </div>
                    </div>
                </div>
                <div className="Donorprofile__InputRow">
                    <div className="Donorprofile__InputField">
                        <div className="Donorprofile__LabelStack">Address</div>
                        <div className="Donorprofile__TextInput">
                            <input type="text" name="location" value={userFormData.location} onChange={handleChange} placeholder="Enter your Address" required readOnly={!editMode} />
                        </div>
                    </div>
                </div>
                <div className="Donorprofile__InputRow">
                    <div className="Donorprofile__InputField">
                        <div className="Donorprofile__LabelStack">Medical History (optional)</div>
                        <div className="Donorprofile__TextInput">
                            <textarea name="medicalHistory" rows="4" value={userFormData.medicalHistory} onChange={handleChange} placeholder="Any relevant medical history or medications" readOnly={!editMode}></textarea>
                        </div>
                    </div>
                </div>
                <div className="Donorprofile__last">
                    {error && console.log(error)}
                    {success && console.log(success)}
                    {editMode ? (
                        <>
                            <button className="Donorprofile__savebtn" type="submit" disabled={loading}>
                                {loading ? "Saving..." : "Save Profile"}
                            </button>
                            <button type="button" onClick={handleCancel} style={{ marginLeft: 8 }}>Cancel</button>
                        </>
                    ) : (
                        <button type="button" onClick={handleEdit}>Edit</button>
                    )}
                </div>
            </form>
        </div>
    );
}