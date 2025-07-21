import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { BadgeCheck, ChevronUp, Gauge, LogOut, NotebookText, ShieldUser, SquareActivity, User2, Users } from "lucide-react"
import { Link } from "react-router"

const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: Gauge,
    },
    {
        title: "Appointments",
        url: "/appointments",
        icon: NotebookText,
    },
    {
        title: "Patients",
        url: "/patients",
        icon: Users,
    },
    {
        title: "Doctors",
        url: "/doctors",
        icon: ShieldUser,
    }
]

export function AppSidebar() {
    return (
        <Sidebar variant="inset" collapsible="icon">
            <SidebarContent>
                <SidebarGroup >
                    <SidebarGroupLabel>
                        Medi Matrix
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link to={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Username
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side="top"
                                className="w-[--radix-popper-anchor-width]"
                            >
                                <DropdownMenuItem>
                                    <BadgeCheck /><span>Account</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LogOut /><span>Sign out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}