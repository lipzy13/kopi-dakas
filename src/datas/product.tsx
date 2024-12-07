export type Product = {
	id: string;
	nama: string;
	harga: number;
	image?: string;
};

export const product: Product[] = [
	{
		id: "1",
		nama: "Teh",
		harga: 5000,
	},
	{
		id: "2",
		nama: "Kopi Susu Klasik",
		harga: 10000,
	},
	{
		id: "3",
		nama: "Kopi Susu Aren",
		harga: 12000,
	},
	{
		id: "4",
		nama: "Americano",
		harga: 8000,
	},
	{
		id: "5",
		nama: "Coklat",
		harga: 12000,
	},
];
