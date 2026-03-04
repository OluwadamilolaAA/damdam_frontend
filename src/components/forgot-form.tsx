import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "@/api/axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);
    try {
      setIsSubmitting(true);
      const res = await forgotPassword({ email });
      navigate("/reset-password", {
        state: {
          email,
          infoMessage: res.data.message || "OTP sent. Check your email.",
        },
      });
    } catch (err: any) {
      setErrors(err.response?.data?.message || err.message || "Failed to submit");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6">
      <div className="w-full max-w-md mb-4 text-center">
        <h1 className="text-2xl font-bold">Forgot Password</h1>
        <p className="text-sm text-muted-foreground">Enter your account email to reset your password</p>
      </div>

      <Card className="w-full max-w-md">
        <CardContent>
          {errors && <p className="text-sm text-red-500 mb-4">{errors}</p>}

          <form onSubmit={handleSubmit}>
            <FieldGroup className="space-y-4">
              <Field className="mt-12">
                <FieldLabel htmlFor="email">Email address</FieldLabel>
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Field>

              <Field>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send OTP"}
                </Button>
                <FieldDescription className="text-center">
                  Remembered? <Link to="/login" className="underline">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
