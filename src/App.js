import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LogIn from './component/LogIn/LogIn';
import SignUp from './component/SingUp/SingUp';
import Welcome from './component/Welcome/Welcome';
import Profile from './component/Profile/Profile';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/React-Admin-App" element={<Navigate to="/login" />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} index />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
