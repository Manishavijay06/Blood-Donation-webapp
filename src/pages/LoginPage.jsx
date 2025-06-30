import React from "react";
import heartlogo from "../assets/heartlogo.svg";
import "../styles/LoginPage.css";
import {useState} from "react";
import {signInWithEmailAndPassword,fetchSignInMethodsForEmail} from "firebase/auth";
import {auth} from "../firebase.js";

export default function LoginPage() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=async()=>{
        try{
            
            const user=await signInWithEmailAndPassword(auth,email,password);
            console.log(user);
        }
        catch (error) {
            // 🔐 Handle known Firebase errors
            if (error.code === "auth/wrong-password") {
              alert("Incorrect password. Please try again.");
            } else if (error.code === "auth/invalid-email") {
              alert("Invalid email format.");
            } else if (error.code === "auth/user-disabled") {
              alert("This account has been disabled.");
            } else {
              console.error("Login error:", error.message);
              alert("Login failed: " + error.message);
            }
        }
    }
    return (
        <div className="LoginPage_container">
            <div className="LoginPage_form">
                <div className="LoginPage_icon">
                    <img src={heartlogo} alt="Heart Logo"></img>
                </div>
                <div className="LoginPage_form-header">
                    <div className="LoginPage_form-header-title">Welcome Back</div>
                    <div className="LoginPage_form-header-desc">Sign in to your blood donation account</div>
                </div>

                <div className="LoginPage_form_group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>

                <div className="LoginPage_form_group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>

                <div className="LoginPage_form_forgot_password">
                    <a href="#" className="LoginPage_form_forgot_password_text">Forgot Password?</a>
                </div>

                <button className="LoginPage_form_button" onClick={handleLogin}>Login</button>

                <div className="LoginPage_dont_have_acc">
                    <span>Don't have an account?</span>
                    <a href="#" className="LoginPage_dont_have_acc_link">Register</a>
                </div>
            </div>
        </div>
    );
}