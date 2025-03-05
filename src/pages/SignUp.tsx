
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created successfully",
        description: "Welcome to BetaBlu!",
      });
      navigate("/chat");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6 text-zinc-600 dark:text-zinc-400"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Button>
        <h1 className="text-2xl font-bold text-center">Create a BetaBlu account</h1>
        <p className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300"
          >
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-zinc-800 py-8 px-6 shadow rounded-lg sm:px-10 border border-zinc-200 dark:border-zinc-700">
          <form className="space-y-6" onSubmit={handleSignUp}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-600 px-3 py-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-600 px-3 py-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-zinc-300 dark:border-zinc-600 px-3 py-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-zinc-700 dark:text-zinc-300">
                I agree to the{" "}
                <a href="#" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
