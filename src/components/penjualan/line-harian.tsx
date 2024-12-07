import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
} from "../ui/chart";
import { chartData } from "@/datas/dummyChart";

const chartConfig = {
	stok_awal: {
		label: "Stok Awal",
		color: "hsl(12 76% 61%)",
	},
	terjual: {
		label: "Terjual",
		color: "hsl(173 58% 39%)",
	},
} satisfies ChartConfig;

export function PenjualanHarian() {
	return (
		<ChartContainer config={chartConfig}>
			<AreaChart
				accessibilityLayer
				data={chartData}
				margin={{
					left: 12,
					right: 12,
				}}
			>
				<CartesianGrid vertical={false} />
				<XAxis
					dataKey="hari"
					tickLine={false}
					axisLine={false}
					tickMargin={8}
					tickFormatter={(value) => value.slice(0, 3)}
				/>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent indicator="line" />}
				/>
				<Area
					dataKey="terjual"
					type="natural"
					fill="hsl(173 58% 39%)"
					fillOpacity={0.4}
					stroke="hsl(173 58% 39%)"
					stackId="a"
				/>
				<Area
					dataKey="stok_awal"
					type="natural"
					fill="hsl(12 76% 61%)"
					fillOpacity={0.4}
					stroke="hsl(12 76% 61%)"
					stackId="a"
				/>
				<ChartLegend content={<ChartLegendContent />} />
			</AreaChart>
		</ChartContainer>
	);
}
