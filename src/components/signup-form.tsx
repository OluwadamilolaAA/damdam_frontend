import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "@/api/axios";
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

export function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<string | null>(null);
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);
    try {
      const res = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setUser(res.data.user);
      navigate("/login");
    } catch (err: any) {
      setErrors(err.response?.data?.message || err.message || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6">
      <div className="w-full max-w-md mb-4 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-bold cursor-pointer">
            sign in
          </Link>
        </p>
      </div>

      <Card className="w-full max-w-md">
        <CardContent>
          {errors && <p className="text-sm text-red-500 mb-4">{errors}</p>}

          <form onSubmit={handleSubmit}>
            <FieldGroup className="space-y-4">
              <Field className="mt-12">
                <FieldLabel htmlFor="name">Full name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email address</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </Field>

              <Field className="space-y-2">
                <Button type="submit" className="w-full">
                  Create account 
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
