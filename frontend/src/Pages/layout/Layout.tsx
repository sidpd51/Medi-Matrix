import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <main className="p-2 w-full">
                    <SidebarTrigger />
                    <div className="mt-3">
                        {children}
                    </div>
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}