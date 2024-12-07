import { AppSidebar } from "@/components/app-sidebar";
import { DataTable } from "@/components/gerobak/DataTable";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

import { columns } from "@/components/gerobak/columns";
import { gerobak } from "@/datas/gerobak";
import { PenjualanHarian } from "@/components/penjualan/line-harian";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { RadialHarian } from "@/components/penjualan/radial-harian";
import { TrendingUp } from "lucide-react";

export default function Dashboard() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator
							orientation="vertical"
							className="mr-2 h-4"
						/>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className="hidden md:block" />
								<BreadcrumbItem>
									<BreadcrumbPage>Beranda</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
					<div className="grid auto-rows-min gap-2 md:grid-cols-2">
						<Card className="rounded-xl">
							<CardHeader>
								<CardTitle>Stok awal dan Penjualan - Seminggu</CardTitle>
								<CardDescription>
									Total stok awal dan penjualan dalam seminggu terakhir
								</CardDescription>
							</CardHeader>
							<CardContent>
								<PenjualanHarian />
							</CardContent>
						</Card>
						<Card className="rounded-xl flex flex-col">
							<CardHeader className="mb-2">
								<CardTitle>Stok awal dan Penjualan - Hari Ini</CardTitle>
								<CardDescription>
									Total stok awal dan penjualan Hari Ini
								</CardDescription>
								<CardContent className="flex-1 pb-0">
									<RadialHarian />
								</CardContent>
								<CardFooter className="flex-col gap-2 text-sm">
									<div className="flex items-center gap-2 font-medium leading-none">
										Terdapat 45% produk terjual hari ini{" "}
										<TrendingUp className="h-4 w-4" />
									</div>
									<div className="leading-none text-muted-foreground">
										570 dari 1260 Produk terjual hari ini
									</div>
								</CardFooter>
							</CardHeader>
						</Card>
					</div>
					<div className="flex-1 rounded-xl md:min-h-min">
						<DataTable
							columns={columns}
							data={gerobak}
						/>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
