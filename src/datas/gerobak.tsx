type Gerobak = {
	id: string;
	nama: string;
	pegawai: string;
	stok_tersedia: number;
	terjual: number;
	status: "Aktif" | "Nonaktif";
};

export const gerobak: Gerobak[] = [
	{
		id: "728ed52f",
		nama: "Gerobak 1",
		pegawai: "Pegawai 1",
		stok_tersedia: 100,
		terjual: 50,
		status: "Aktif",
	},
	{
		id: "489e1d42",
		nama: "Gerobak 2",
		pegawai: "Pegawai 2",
		stok_tersedia: 20,
		terjual: 20,
		status: "Aktif",
	},
	{
		id: "489ef13",
		nama: "Gerobak 3",
		pegawai: "Pegawai 3",
		stok_tersedia: 20,
		terjual: 50,
		status: "Nonaktif",
	},
];
