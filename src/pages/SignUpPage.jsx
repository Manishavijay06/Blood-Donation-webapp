import heartlogo from "../assets/heartlogo.svg";
import "../styles/SignUpPage.css";
import React from "react";
import {useState} from "react";
import {createUserWithEmailAndPassword,fetchSignInMethodsForEmail} from "firebase/auth";
import {auth} from "../firebase.js";
import {doc,setDoc} from "firebase/firestore";
import {db} from "../firebase.js";
export default function SignUpPage() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [age,setAge]=useState("");
    const [bloodGroup,setBloodGroup]=useState("");
    const [location,setLocation]=useState("");
    const [password,setPassword]=useState("");  
    const [confirmPassword,setConfirmPassword]=useState("");
    const handleSignUp=async()=>{
        try{
            if (password!==confirmPassword){
                alert("Password and Confirm Password do not match");
                return;
            }
            const methods=await fetchSignInMethodsForEmail(auth,email);
            console.log(methods);
            if (methods.length>0){
                alert("This email is already registered. Please log in.");
                return;
            }
            const userCredentials=await createUserWithEmailAndPassword(auth,email,password);
            const user=userCredentials.user;

            await setDoc(doc(db,"users",user.uid),{
                name,
                email,
                phoneNumber,
                age,
                bloodGroup,
                location,
            })
            alert("Account created successfully");
        }
        catch(error){
            if (error.code === "auth/email-already-in-use") {
                alert("This email is already registered. Please log in.");
            } else if (error.code === "auth/invalid-email") {
                alert("Please enter a valid email.");
            } else if (error.code === "auth/weak-password") {
                alert("Password must be at least 6 characters.");
            } else {
                alert("Signup failed: " + error.message);
            }
        }
    }
    return (
        <div className="SignUpPage_container">
            <div className="SignUpPage_form">
                <div className="SignUpPage_icon">
                    <img src={heartlogo} alt="Heart Logo"></img>
                </div>
                <div className="SignUpPage_form-header">
                    <div className="SignUpPage_form-header-title">Create Account</div>
                    <div className="SignUpPage_form-header-desc">Join the blood donation community</div>
                </div>

                <div className="SignUpPage_form_group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" onChange={(e)=>setName(e.target.value)}></input>
                </div>

                <div className="SignUpPage_form_group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>  

                <div className="SignUpPage_form_group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter your phone number" onChange={(e)=>setPhoneNumber(e.target.value)}></input>
                </div>

                <div className="SignUpPage_form_group">
                    <label>Age</label>
                    <input type="number" placeholder="Enter your age" min="18" max="65" onChange={(e)=>setAge(e.target.value)}></input>
                </div>

                <div className="SignUpPage_form_group">
                    <label>Blood Group</label>
                    <select defaultValue="" onChange={(e)=>setBloodGroup(e.target.value)}>
                        <option value="" disabled>Select your blood group</option>
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
                    <input type="text" placeholder="Enter your city/location" onChange={(e)=>setLocation(e.target.value)}></input>
                </div>

                <div className="SignUpPage_form_group">
                    <label>Password</label>
                    <input type="password" placeholder="Create your password" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>

                <div className="SignUpPage_form_group">
                    <label>Confirm Password</label>
                    
                    <input type="password" placeholder="Confirm your password" onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                </div>

                <button className="SignUpPage_form_button" onClick={handleSignUp}>Sign Up</button>

                <div className="SignUpPage_have_acc">
                    <span>Already have an account?</span>
                    <a href="#" className="SignUpPage_have_acc_link">Login</a>
                </div>
            </div>
        </div>
    );
} 