import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { Signup } from "./components/signup-form";
import { Login } from "./components/login-form";
import ForgotPassword from "./components/forgot-form";
import ResetPassword from "./components/reset-password";
import DashboardPage from "./pages/Dashboard-page";
import Home from "./pages/Home";
import About from "./pages/About";
import ShopSection from "./pages/Shop";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Footer";

const AUTH_ROUTES = new Set(["/signup", "/login", "/forgot-password", "/reset-password"]);

const AppContent = () => {
  const { pathname } = useLocation();
  const showNavbar = !AUTH_ROUTES.has(pathname);
  const showFooter = !AUTH_ROUTES.has(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
