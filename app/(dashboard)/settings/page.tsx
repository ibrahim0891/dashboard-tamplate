export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div className="p-6 rounded-xl border bg-background shadow-sm">
                <h2 className="text-xl font-semibold mb-4">General Settings</h2>
                <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Display Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="px-3 py-2 rounded-md border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Email Address</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="px-3 py-2 rounded-md border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                        />
                    </div>
                </div>
            </div>

            <div className="p-6 rounded-xl border bg-background shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-red-500">Danger Zone</h2>
                <p className="text-sm text-foreground/60 mb-4">Permanently delete your account and all associated data.</p>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600 transition-colors">
                    Delete Account
                </button>
            </div>
        </div>
    );
}
