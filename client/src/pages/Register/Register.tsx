import { Link, useNavigate } from "react-router-dom";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";

export default function Register() {
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        navigate("/login");
    }

    return (
        <Card>
            <h1 className="text-3xl font-bold mb-2">
                Create Account
            </h1>

            <p className="text-gray-500 mb-8">
                Join HireHelp today.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <PasswordInput placeholder="Password" />
                <PasswordInput placeholder="Confirm Password" />

                <Button type="submit">
                    Register
                </Button>
            </form>

            <p className="text-center mt-6">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-blue-600 font-semibold"
                >
                    Login
                </Link>
            </p>
        </Card>
    );
}