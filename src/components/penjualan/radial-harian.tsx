import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
	{ stok_awal: 1260, terjual: 570, fill: "hsl(var(--chart-1)" },
];

const chartConfig = {
	stok_awal: {
		label: "Stok Awal",
		color: "hsl(var(--chart-2))",
	},
	terjual: {
		label: "Terjual",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;
export function RadialHarian() {
	const angle = (chartData[0].terjual / chartData[0].stok_awal) * 360;
	return (
		<ChartContainer
			config={chartConfig}
			className="mx-auto aspect-square max-h-[250px]"
		>
			<RadialBarChart
				data={chartData}
				endAngle={angle}
				innerRadius={80}
				outerRadius={140}
			>
				<PolarGrid
					gridType="circle"
					radialLines={false}
					stroke="none"
					className="first:fill-muted last:fill-background"
					polarRadius={[86, 74]}
				/>
				<RadialBar
					dataKey="terjual"
					background
				/>
				<PolarRadiusAxis
					tick={false}
					tickLine={false}
					axisLine={false}
				>
					<Label
						content={({ viewBox }) => {
							if (viewBox && "cx" in viewBox && "cy" in viewBox) {
								return (
									<text
										x={viewBox.cx}
										y={viewBox.cy}
										textAnchor="middle"
										dominantBaseline="middle"
									>
										<tspan
											x={viewBox.cx}
											y={viewBox.cy}
											className="fill-foreground text-4xl font-bold"
										>
											{chartData[0].terjual.toLocaleString()}
										</tspan>
										<tspan
											x={viewBox.cx}
											y={(viewBox.cy || 0) + 24}
											className="fill-muted-foreground"
										>
											Terjual
										</tspan>
									</text>
								);
							}
						}}
					/>
				</PolarRadiusAxis>
			</RadialBarChart>
		</ChartContainer>
	);
}
