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
      bg-slate-900/50
      border
      border-slate-800/50
      shadow-xl
      p-6
      hover:border-blue-500/50
      hover:shadow-xl
      hover:shadow-blue-500/10
      transition-all
      duration-300
    "
        >
            {children}
        </div>
    );
}