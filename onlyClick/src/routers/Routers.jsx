import { Routes, Route } from 'react-router';
import LandingPage from '../pages/LandingPage.jsx';
import Login from '../pages/Auth/Common/Login.jsx';
import SignUpUser from '../pages/Auth/SignUpUser.jsx';
import OtpScreen from '../pages/Auth/Common/OtpScreen.jsx';
import SignUpContractor from '../pages/Auth/Contractor/SignUpContractor.jsx';
import HomePage from '../pages/Contractor/HomePage.jsx';
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="auth">
        <Route path="user">
          <Route path="login">
            <Route index element={<Login />} />
            <Route path="otp" element={<OtpScreen />} />
          </Route>
          <Route path="signup" element={<SignUpUser />} />
        </Route>
        <Route path="contractor">
          <Route index element={<Login />} />
          <Route path="verifyOtp" element={<OtpScreen />} />
          <Route path="signup" element={<SignUpContractor />} />
        </Route>
      </Route>
      <Route path="home">
        <Route path="contractor">
          <Route index element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Routers;
