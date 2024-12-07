import { ColumnDef } from "@tanstack/react-table";
export type Gerobak = {
	id: string;
	nama: string;
	pegawai: string;
	stok_tersedia: number;
	terjual: number;
	status: "Aktif" | "Nonaktif";
};

export const columns: ColumnDef<Gerobak>[] = [
	{
		accessorKey: "nama",
		header: "Nama",
	},
	{
		accessorKey: "pegawai",
		header: "Pegawai",
	},
	{
		accessorKey: "stok_tersedia",
		header: "Stok Tersedia",
	},
	{
		accessorKey: "terjual",
		header: "Terjual",
	},
	{
		accessorKey: "status",
		header: "Status",
	},
];
