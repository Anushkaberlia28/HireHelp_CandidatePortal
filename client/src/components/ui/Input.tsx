import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

const Input = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            className={clsx(
                "w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none",
                className
            )}
        />
    );
});

Input.displayName = "Input";

export default Input;