"use client";

import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    // Convert pathname to title (e.g., /page1 -> Page 1)
    const getPageTitle = (path: string) => {
        if (path === "/") return "Overview";
        const segment = path.split("/").filter(Boolean).pop();
        if (!segment) return "Dashboard";
        return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    };

    return (
        <header className="h-16 border-b bg-background/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10 shrink-0">
            <div className="flex items-center gap-4">
                <h1 className="font-semibold text-lg">{getPageTitle(pathname)}</h1>
            </div>

            <div className="flex items-center gap-4">
                {/* Placeholder for user profile or settings */}
                <div className="w-8 h-8 rounded-full bg-foreground/10 border flex items-center justify-center">
                    <span className="text-xs font-medium">JD</span>
                </div>
            </div>
        </header>
    );
}
