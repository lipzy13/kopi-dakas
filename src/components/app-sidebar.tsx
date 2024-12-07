import * as React from "react";
import { Archive, ChartArea, Coffee, ShoppingBag } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
	user: {
		name: "admin",
		username: "Admin",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Stok",
			url: "#",
			icon: ShoppingBag,
			isActive: true,
			items: [
				{
					title: "Semua",
					url: "#",
				},
				{
					title: "Gerobak",
					url: "#",
				},
			],
		},
		{
			title: "Laporan",
			url: "#",
			icon: ChartArea,
			items: [
				{
					title: "Harian",
					url: "#",
				},
				{
					title: "Mingguan",
					url: "#",
				},
				{
					title: "Bulanan",
					url: "#",
				},
			],
		},
		{
			title: "Produk",
			url: "#",
			icon: Archive,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			variant="inset"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							asChild
						>
							<a href="#">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Coffee className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">Kopi Dakas</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
