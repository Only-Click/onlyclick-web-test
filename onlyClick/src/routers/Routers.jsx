import { Routes, Route } from "react-router";
import LandingPage from "../pages/LandingPage.jsx";
import Login from "../pages/Auth/Common/Login.jsx";
import SignUpUser from "../pages/Auth/SignUpUser.jsx";
import OtpScreen from "../pages/Auth/Common/OtpScreen.jsx";
import SignUpContractor from "../pages/Auth/Contractor/SignUpContractor.jsx";
import HomePage from "../pages/Contractor/DashBoardContractor.jsx";
import HomePageUser from "../pages/User/HomePageUser.jsx";
import LoginContractor from "../pages/Auth/Contractor/LoginContractor.jsx";
import OtpContractor from "../pages/Auth/Contractor/OtpContractor.jsx";
import CategoryPage from "../pages/User/CategoryPage.jsx";
import SubCategoryPage from "../pages/User/SubCategoryPage.jsx";
import ServicesPage from "../pages/User/ServicesPage.jsx";
import UserProfile from "../pages/User/UserProfile.jsx";
import Cart from "../pages/User/Cart.jsx";
import DashBoardContractor from "../pages/Contractor/DashBoardContractor.jsx";
import ContractorProfile from "../pages/Contractor/ContractorProfile.jsx";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="auth/*">
        <Route path="login" element={<Login />} />
        <Route path="otp" element={<OtpScreen />} />
        <Route path="signup" element={<SignUpUser />} />
      </Route>
      <Route path="user/*">
        <Route path="home" element={<HomePageUser />} />
        <Route path="profile" element={< UserProfile/>} />
        <Route path="cart" element={< Cart/>} />

        <Route path="category/:name" element={<CategoryPage />} />
        <Route path="category/:name/:sub_name" element={<SubCategoryPage />} />
        <Route path="service/:id" element={<ServicesPage/>}/>
      </Route>
      <Route path="contractor">
        <Route path="auth">
          <Route path="login">
            <Route index element={<LoginContractor />} />
            <Route path="otp" element={<OtpContractor />} />
          </Route>
          <Route path="signup" element={<SignUpContractor />} />
        </Route>
        <Route path="home" element={<DashBoardContractor />} />
        <Route path="profile" element={<ContractorProfile />} />

      </Route>
    </Routes>
  );
}

export default Routers;
