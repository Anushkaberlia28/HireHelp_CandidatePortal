import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export default function Input({
    label,
    ...props
}: Props) {
    return (
        <div className="space-y-2">
            {label && (
                <label className="text-sm text-slate-300">
                    {label}
                </label>
            )}

            <input
                {...props}
                className="
          w-full
          rounded-xl
          border
          border-slate-600
          bg-slate-800
          px-4
          py-3
          text-white
          outline-none
          focus:border-blue-500
        "
            />
        </div>
    );
}