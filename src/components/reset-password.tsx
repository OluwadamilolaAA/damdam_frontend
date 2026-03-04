import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "@/api/axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const routeState = (location.state || {}) as {
    email?: string;
    infoMessage?: string;
  };

  // Step 1: email and 6-digit OTP
  const [email, setEmail] = useState(routeState.email || "");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Step 2: new password
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [errors, setErrors] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(routeState.infoMessage || null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (routeState.email) {
      setEmail(routeState.email);
    }
    if (routeState.infoMessage) {
      setMessage(routeState.infoMessage);
    }
  }, [routeState.email, routeState.infoMessage]);

  const focusAt = (index: number) => {
    const el = otpRefs.current[index];
    if (el) el.focus();
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const val = e.target.value.replace(/\D/g, "");
    if (!val) {
      setOtp((prev) => {
        const next = [...prev];
        next[idx] = "";
        return next;
      });
      return;
    }

    // If user typed multiple digits (rare), take first
    const digit = val[0];
    setOtp((prev) => {
      const next = [...prev];
      next[idx] = digit;
      return next;
    });
    // move focus
    if (idx < 5) focusAt(idx + 1);
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace") {
      if (otp[idx]) {
        // clear current
        setOtp((prev) => {
          const next = [...prev];
          next[idx] = "";
          return next;
        });
      } else if (idx > 0) {
        focusAt(idx - 1);
        setOtp((prev) => {
          const next = [...prev];
          next[idx - 1] = "";
          return next;
        });
      }
    } else if (e.key === "ArrowLeft") {
      if (idx > 0) focusAt(idx - 1);
    } else if (e.key === "ArrowRight") {
      if (idx < 5) focusAt(idx + 1);
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!paste) return;
    const digits = paste.slice(0, 6).split("");
    setOtp((prev) => {
      const next = [...prev];
      for (let i = 0; i < 6; i++) next[i] = digits[i] ?? "";
      return next;
    });
    // focus after last filled or last input
    const lastIndex = Math.min(digits.length, 6) - 1;
    focusAt(lastIndex >= 0 ? lastIndex : 5);
  };

  const goToStep2 = (e?: React.FormEvent) => {
    e?.preventDefault();
    setErrors(null);
    if (!email) return setErrors("Please provide your email.");
    if (otp.some((d) => d === "")) return setErrors("Please enter the 6-digit OTP.");
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);
    setMessage(null);
    if (password.length < 8) return setErrors("Password must be at least 8 characters.");
    if (password !== confirm) return setErrors("Passwords do not match.");

    try {
      setIsSubmitting(true);
      const code = otp.join("");
      const res = await resetPassword({ email, otp: code, newPassword: password });
      setMessage(res.data?.message || "Password updated. Please login.");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err: any) {
      setErrors(err.response?.data?.message || err.message || "Reset failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6">
      <div className="w-full max-w-md mb-4 text-center">
        <h1 className="text-2xl font-bold">Reset Password</h1>
        <p className="text-sm text-muted-foreground">Enter your email, OTP and a new password</p>
      </div>

      <Card className="w-full max-w-md">
        <CardContent>
          {errors && <p className="text-sm text-red-500 mb-4">{errors}</p>}
          {message && <p className="text-sm text-green-600 mb-4">{message}</p>}

          {step === 1 && (
            <form onSubmit={goToStep2}>
              <FieldGroup className="space-y-4">
                <Field className="mt-12">
                  <FieldLabel htmlFor="email">Email address</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel>Enter 6-digit OTP</FieldLabel>
                  <div className="flex gap-2 mt-2">
                    {Array.from({ length: 6 }).map((_, idx) => (
                      <Input
                        key={idx}
                        inputMode="numeric"
                        pattern="\\d*"
                        autoComplete={idx === 0 ? "one-time-code" : "off"}
                        maxLength={1}
                        className="w-12 text-center"
                        value={otp[idx]}
                        onChange={(e) => handleOtpChange(e, idx)}
                        onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                        onPaste={handleOtpPaste}
                        ref={(el) => { otpRefs.current[idx] = el; }}
                      />
                    ))}
                  </div>
                </Field>

                <Field>
                  <Button type="submit" className="w-full">Continue</Button>
                  <FieldDescription className="text-center">
                    Back to <Link to="/login" className="underline">Login</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <FieldGroup className="space-y-4">
                <Field>
                  <FieldLabel htmlFor="password">New password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="confirm">Confirm password</FieldLabel>
                  <Input
                    id="confirm"
                    type="password"
                    autoComplete="new-password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                  />
                </Field>

                <Field>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Updating..." : "Update password"}
                  </Button>
                  <FieldDescription className="text-center">
                    Back to <Link to="/login" className="underline">Login</Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
