import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Card({
    children,
}: Props) {
    return (
        <div
            className="
      rounded-2xl
      bg-slate-900
      border
      border-slate-700
      shadow-xl
      p-6
    "
        >
            {children}
        </div>
    );
}