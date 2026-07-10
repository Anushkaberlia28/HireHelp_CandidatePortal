import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/store/hooks";
import { loginStart, loginSuccess, loginFailure } from "@/store/authSlice";
import { login } from "@/api/auth.api";
import type { LoginRequest } from "@/types/auth";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";

export default function LoginForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginRequest>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: LoginRequest) {
        setServerError(null);
        dispatch(loginStart());

        try {
            const response = await login(values);

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
                    : "Login failed. Please try again.";

            setServerError(message);
            dispatch(loginFailure(message));
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {serverError && (
                <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-200">
                    {serverError}
                </div>
            )}

            <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                className="bg-slate-950"
                {...register("email", {
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
                placeholder="Enter your password"
                {...register("password", {
                    required: "Password is required.",
                })}
            />

            {errors.password && (
                <p className="text-sm text-rose-400">{errors.password.message}</p>
            )}

            <Button type="submit" loading={isSubmitting}>
                Sign in
            </Button>
        </form>
    );
}
