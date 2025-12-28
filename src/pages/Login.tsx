import * as React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, LogIn, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      toast({
        title: "Login successful!",
        description: "Welcome back to Ringo.",
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="border-b">
        <div className="container-max">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-sunset">Ringo</span>
            </Link>

            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link to="/how-it-works" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                How It Works
              </Link>
              <Link to="/pricing" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                Pricing
              </Link>

              <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                Contact
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link to="/?join-waitlist=true">
                <Button className="btn-sunset">Join Waitlist</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container-max">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>

              <Badge className="mb-4">
                <LogIn className="h-3 w-3 mr-1" />
                Member Login
              </Badge>

              <h1 className="text-3xl font-bold mb-2">
                Welcome <span className="text-sunset">Back</span>
              </h1>
              <p className="text-muted-foreground">
                Sign in to your Ringo account to manage your global connectivity
              </p>
            </div>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="ml-2 text-sm text-muted-foreground">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                      Forgot password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="btn-sunset w-full"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>

                <Separator className="my-6" />

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link to="/?join-waitlist=true" className="text-blue-600 hover:text-blue-800 font-medium">
                      Join the waitlist
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-xs text-muted-foreground">
                By signing in, you agree to our{" "}
                <Link to="/terms" className="text-blue-600 hover:text-blue-800">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;