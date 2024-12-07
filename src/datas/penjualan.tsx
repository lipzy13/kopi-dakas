import { Product } from "./product";

type Penjualan = {
	id: string;
	product: (Product & { quantity: number })[];
	date_created: Date;
	total_harga: number;
};

export const penjualan: Penjualan[] = [
	{
		id: "1",
		product: [
			{
				id: "1",
				nama: "Teh",
				harga: 5000,
				quantity: 1,
			},
		],
		date_created: new Date("2024-01-07"),
		total_harga: 5000,
	},
];
