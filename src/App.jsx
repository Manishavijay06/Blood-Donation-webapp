import HomePage from "./pages/HomePage";
import DonorDashboard from "./pages/DonorDashboard";
import RecipientsPage from "./pages/RecipientsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/donor-dashboard" element={<DonorDashboard/>}/>
          <Route path="/recipients" element={<RecipientsPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
