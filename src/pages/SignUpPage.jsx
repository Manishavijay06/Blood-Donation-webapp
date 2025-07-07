import heartlogo from "../assets/heartlogo.svg";
import "../styles/SignUpPage.css";
import React from "react";
import {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase.js";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../firebase.js";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault(); 

        // Validate all required fields
        if (!name || !email || !phoneNumber || !age || !bloodGroup || !location || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }

        if (age < 18 || age > 65) {
            alert("Age must be between 18 and 65");
            return;
        }

        if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number");
            return;
        }

        // Validate password
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store additional user data in Firestore
            await setDoc(doc(db, "users", user.uid), {
                name,
                email,
                phoneNumber,
                age,
                bloodGroup,
                location,
                createdAt: new Date().toISOString()
            });
            navigate("/");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("This email is already registered. Please log in.");
            } else if (error.code === "auth/invalid-email") {
                alert("Please enter a valid email.");
            } else if (error.code === "auth/weak-password") {
                alert("Password must be at least 6 characters.");
            } else {
                console.error("Signup error:", error);
                alert("Signup failed: " + error.message);
            }
        }
    }

    return (
        <div className="SignUpPage_container">
            <form className="SignUpPage_form" onSubmit={handleSignUp}>
                <div className="SignUpPage_icon">
                    <img src={heartlogo} alt="Heart Logo" />
                </div>
                <div className="SignUpPage_form-header">
                    <div className="SignUpPage_form-header-title">Create Account</div>
                    <div className="SignUpPage_form-header-desc">Join the blood donation community</div>
                </div>

                <div className="SignUpPage_form_group">
                    <label>Full Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your full name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="SignUpPage_form_group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>  

                <div className="SignUpPage_form_group">
                    <label>Phone Number</label>
                    <input 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        pattern="[0-9]{10}"
                        required
                    />
                </div>

                <div className="SignUpPage_form_group">
                    <label>Age</label>
                    <input 
                        type="number" 
                        placeholder="Enter your age" 
                        min="18" 
                        max="65" 
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>

                <div className="SignUpPage_form_group">
                    <label>Blood Group</label>
                    <select 
                        value={bloodGroup} 
                        onChange={(e) => setBloodGroup(e.target.value)}
                        required
                    >
                        <option value="">Select your blood group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <div className="SignUpPage_form_group">
                    <label>Location</label>
                    <input 
                        type="text" 
                        placeholder="Enter your city/location" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>

                <div className="SignUpPage_form_group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder="Create your password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength="6"
                        required
                    />
                </div>

                <div className="SignUpPage_form_group">
                    <label>Confirm Password</label>
                    <input 
                        type="password" 
                        placeholder="Confirm your password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        minLength="6"
                        required
                    />
                </div>

                <button type="submit" className="SignUpPage_form_button">Sign Up</button>

                <div className="SignUpPage_have_acc">
                    <span>Already have an account?</span>
                    <button 
                        type="button"
                        className="SignUpPage_have_acc_link"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/login");
                        }}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
} 