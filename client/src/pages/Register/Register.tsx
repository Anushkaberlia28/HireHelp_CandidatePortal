import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "@/store/hooks";
import { loginStart, loginSuccess, loginFailure } from "@/store/authSlice";
import { register } from "@/services/auth.api";
import type { RegisterRequest } from "@/types/auth";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";

export default function Register() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register: registerField,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterRequest>({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    async function onSubmit(values: RegisterRequest) {
        setServerError(null);
        dispatch(loginStart());

        try {
            const response = await register(values);

            dispatch(
                loginSuccess({
                    user: response.user,
                    token: response.accessToken,
                })
            );

            navigate("/dashboard");
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "Registration failed. Please try again.";

            setServerError(message);
            dispatch(loginFailure(message));
        }
    }

    return (
        <Card>
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>

            <p className="text-gray-500 mb-8">Join HireHelp today.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {serverError && (
                    <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-200">
                        {serverError}
                    </div>
                )}

                <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    {...registerField("fullName", {
                        required: "Full name is required.",
                        minLength: {
                            value: 2,
                            message: "Full name is too short.",
                        },
                    })}
                />
                {errors.fullName && (
                    <p className="text-sm text-rose-400">{errors.fullName.message}</p>
                )}

                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    {...registerField("email", {
                        required: "Email is required.",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address.",
                        },
                    })}
                />
                {errors.email && (
                    <p className="text-sm text-rose-400">{errors.email.message}</p>
                )}

                <PasswordInput
                    placeholder="Create a password"
                    {...registerField("password", {
                        required: "Password is required.",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters.",
                        },
                    })}
                />

                <div className="-mt-4 mb-1 text-sm text-slate-300">Password</div>

                {errors.password && (
                    <p className="text-sm text-rose-400">{errors.password.message}</p>
                )}

                <PasswordInput
                    placeholder="Confirm your password"
                    {...registerField("confirmPassword", {
                        required: "Confirm password is required.",
                        validate: (value, formValues) =>
                            value === formValues.password || "Passwords do not match.",
                    })}
                />

                <div className="-mt-4 mb-1 text-sm text-slate-300">
                    Confirm Password
                </div>

                {errors.confirmPassword && (
                    <p className="text-sm text-rose-400">{errors.confirmPassword.message}</p>
                )}

                <Button type="submit" loading={isSubmitting}>
                    Register
                </Button>
            </form>

            <p className="text-center mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 font-semibold">
                    Login
                </Link>
            </p>
        </Card>
    );
}

