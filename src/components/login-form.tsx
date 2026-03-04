import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/store/userStore";
import { login } from "@/api/axios";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string | null>(null);

  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);
    try {
      const res = await login({ email, password });
      setUser(res.data.user);
      navigate("/dashboard");
    } catch (err: any) {
      setErrors(err.response?.data?.message || err.message || "Login failed");
    }
  };

  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6">
      <div className="w-full max-w-md mb-4 text-center">
        <h1 className="text-2xl font-bold">Sign in to your account</h1>
        <p className="text-sm text-muted-foreground">Or <Link to="/signup" className="font-bold cursor-pointer">create a new account</Link></p>
      </div>

      <Card className="w-full max-w-md">
        <CardContent>
          {errors && <p className="text-sm text-red-500 mb-4">{errors}</p>}

          <form onSubmit={handleSubmit}>
            <FieldGroup className="space-y-4">
              <Field className="mt-12">
                <FieldLabel htmlFor="email">Email address</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    to="/forgot-password"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field>

              <Field className="space-y-2">
                <Button type="submit" className="w-full">
                  Sign in to your account
                </Button>
              </Field>
              <FieldSeparator>Or continue with</FieldSeparator>
              <Field>
                <div className="flex gap-2">
                  <Button variant="outline" type="button" className="flex-1 rounded-lg">
                    Google
                  </Button>
                  <Button variant="outline" type="button" className="flex-1 rounded-lg">
                    GitHub
                  </Button>
                </div>

              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
