"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex bg-background min-h-screen text-foreground">
            {/* Sidebar - Height 100vh */}
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            {/* Main Content Area - Height 100vh */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header - Fixed height */}
                <Header />

                {/* Page Section - Scrollable */}
                <main className="flex-1 overflow-y-auto p-6 bg-foreground/2">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
