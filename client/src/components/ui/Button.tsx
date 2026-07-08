import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

export default function Button({
    children,
    className,
    loading,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            disabled={loading || props.disabled}
            className={clsx(
                "w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50",
                className
            )}
        >
            {loading ? "Loading..." : children}
        </button>
    );
}