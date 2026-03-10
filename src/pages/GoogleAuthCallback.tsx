import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { refresh } from "@/api/axios";
import { useUserStore } from "@/store/userStore";

const GoogleAuthCallback = () => {
  const navigate = useNavigate();
  const { setAuth } = useUserStore();
  const [message, setMessage] = useState("Signing you in with Google...");

  useEffect(() => {
    let isMounted = true;

    const completeGoogleLogin = async () => {
      try {
        const res = await refresh();
        if (!isMounted) {
          return;
        }
        setAuth(res.data.user, res.data.accessToken);
        navigate("/dashboard", { replace: true });
      } catch {
        if (!isMounted) {
          return;
        }
        setMessage("Google sign-in failed. Please try again.");
        setTimeout(() => navigate("/login", { replace: true }), 1200);
      }
    };

    completeGoogleLogin();

    return () => {
      isMounted = false;
    };
  }, [navigate, setAuth]);

  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
};

export default GoogleAuthCallback;
