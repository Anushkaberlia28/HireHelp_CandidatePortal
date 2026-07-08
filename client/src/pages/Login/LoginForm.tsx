export default function LoginForm() {
    return (
        <form className="space-y-4">
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Email
                </label>

                <input
                    type="email"
                    className="w-full rounded-md border p-3"
                    placeholder="Enter email"
                />
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium">
                    Password
                </label>

                <input
                    type="password"
                    className="w-full rounded-md border p-3"
                    placeholder="Enter password"
                />
            </div>

            <button
                className="w-full rounded-md bg-blue-600 py-3 text-white hover:bg-blue-700"
            >
                Login
            </button>
        </form>
    );
}