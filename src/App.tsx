import { useEffect } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
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
import GoogleAuthCallback from "./pages/GoogleAuthCallback";
import { refresh } from "./api/axios";
import { useUserStore } from "./store/userStore";

const AUTH_ROUTES = new Set([
  "/signup",
  "/login",
  "/forgot-password",
  "/reset-password",
  "/auth/callback",
]);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUserStore((state) => state.user);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AppContent = () => {
  const { pathname } = useLocation();
  const {
    user,
    setAuth,
    clearAuth,
    isAuthBootstrapped,
    setAuthBootstrapped,
  } = useUserStore();
  const showNavbar = !AUTH_ROUTES.has(pathname);
  const showFooter = !AUTH_ROUTES.has(pathname);

  useEffect(() => {
    let isMounted = true;

    const bootstrapAuth = async () => {
      try {
        const res = await refresh();
        if (!isMounted) {
          return;
        }
        setAuth(res.data.user, res.data.accessToken);
      } catch {
        if (!isMounted) {
          return;
        }
        clearAuth();
      } finally {
        if (isMounted) {
          setAuthBootstrapped(true);
        }
      }
    };

    bootstrapAuth();

    return () => {
      isMounted = false;
    };
  }, [clearAuth, setAuth, setAuthBootstrapped]);

  if (!isAuthBootstrapped && !user && pathname !== "/auth/callback") {
    return null;
  }

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/auth/callback" element={<GoogleAuthCallback />} />
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
