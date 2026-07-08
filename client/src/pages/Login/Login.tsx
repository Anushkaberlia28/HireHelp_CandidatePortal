import { Link, useNavigate } from "react-router-dom";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";

export default function Login() {
    const navigate = useNavigate();

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        // Temporary login
        navigate("/dashboard");
    }

    return (
        <Card>
            <h1 className="text-3xl font-bold mb-2">
                Welcome Back
            </h1>

            <p className="text-gray-500 mb-8">
                Login to continue
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
                <Input
                    placeholder="Email"
                    type="email"
                />

                <PasswordInput
                    placeholder="Password"
                />

                <Button type="submit">
                    Login
                </Button>
            </form>

            <p className="mt-6 text-center">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="text-blue-600 font-semibold"
                >
                    Register
                </Link>
            </p>
        </Card>
    );
}