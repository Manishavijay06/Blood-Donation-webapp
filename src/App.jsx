import HomePage from "./pages/HomePage";
import DonorDashboard from "./pages/DonorDashboard";
import RecipientsPage from "./pages/RecipientsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>    
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        
        {/* Protected routes */}
        <Route 
          path="/donor-dashboard" 
          element={
            <ProtectedRoute>
              <DonorDashboard/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/recipients" 
          element={
            <ProtectedRoute>
              <RecipientsPage/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
