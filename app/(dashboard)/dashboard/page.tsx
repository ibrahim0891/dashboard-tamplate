export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-6 rounded-xl border bg-background shadow-sm">
                        <h3 className="text-sm font-medium text-foreground/60 mb-1">Total Revenue</h3>
                        <p className="text-2xl font-bold">$45,231.89</p>
                        <p className="text-xs text-green-500 mt-1 font-medium">+20.1% from last month</p>
                    </div>
                ))}
            </div>

            <div className="p-6 rounded-xl border bg-background shadow-sm min-h-[400px] flex items-center justify-center">
                <p className="text-foreground/40 italic">Main dashboard content chart / table placeholder</p>
            </div>

            {/* Overflow testing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                <div className="p-6 rounded-xl border bg-background shadow-sm h-64">
                    <h3 className="font-semibold mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-foreground/20 mt-2" />
                                <div>
                                    <p className="text-sm">User {i} updated their profile</p>
                                    <p className="text-xs text-foreground/40">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-6 rounded-xl border bg-background shadow-sm h-64">
                    <h3 className="font-semibold mb-4">System Status</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                            <span>API</span>
                            <span className="text-green-500 font-medium">Healthy</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>Database</span>
                            <span className="text-green-500 font-medium">Healthy</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>Storage</span>
                            <span className="text-foreground/40">92% used</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
