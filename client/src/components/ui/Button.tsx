import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    fullWidth = false,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(
                "rounded-xl px-5 py-3 font-semibold transition-all duration-300",

                variant === "primary" &&
                "bg-blue-600 hover:bg-blue-700 text-white",

                variant === "secondary" &&
                "bg-slate-700 hover:bg-slate-600 text-white",

                variant === "danger" &&
                "bg-red-600 hover:bg-red-700 text-white",

                fullWidth && "w-full",

                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}