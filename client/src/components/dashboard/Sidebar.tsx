import { navigation } from "@/constants/navigation";
import NavItem from "./NavItem";

export default function Sidebar() {
    return (
        <aside className="w-72 border-r bg-white p-6">
            <h1 className="mb-8 text-2xl font-bold text-blue-600">
                HireHelp
            </h1>

            <nav className="space-y-2">
                {navigation.map((item) => (
                    <NavItem
                        key={item.path}
                        to={item.path}
                        label={item.name}
                        icon={item.icon}
                    />
                ))}
            </nav>
        </aside>
    );
}