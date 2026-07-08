import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side */}
            <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold mb-6">
                        HireHelp
                    </h1>

                    <p className="text-lg leading-8 text-blue-100">
                        Find your dream job, manage your applications,
                        track interviews and build an outstanding professional profile.
                    </p>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center bg-gray-50 p-6">
                <div className="w-full max-w-md">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}