import type { FC } from "react";
import { items_center, justify_end, place_center } from "@/constants/common";
import { poppins_Regular } from "@/constants/fonts";
import { isAndroid } from "@/utils/platform";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { dark_bg } from "@/constants/colors";

export type BarData = {
	label: string;
	percentage: number;
};

export type BarChartProps = {
	barData: BarData[];
	barWidth?: number
};

const BarChart: FC<BarChartProps> = ({ barData, barWidth=28}) => {
	return (
		<View style={{ height: 140 }}>
			<FlatList
				horizontal
				data={barData}
				renderItem={({ item: { label, percentage } }) => {
					return (
						<View style={[justify_end, items_center, { gap: 8 }]}>
							<View
								style={{
									justifyContent: "flex-end",
									padding: 1,
									width: Math.max(28, barWidth),
									height: Math.min(140 - 16 - 8, (136 - 16 - 8) * percentage * 1.2),
									borderRadius: 10,
									backgroundColor: "#6441BF",
								}}
							>
								<LinearGradient
									colors={["#B265FF", "#725DFF"]}
									style={{ height: (136 - 16 - 8) * percentage, borderRadius: 9 }}
								/>
							</View>

							<Text style={css.label}>{label}</Text>
						</View>
					);
				}}
				ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
				keyExtractor={(item) => item.label}
			/>
		</View>
	);
};

export default BarChart;

const css = StyleSheet.create({
	label: {
		fontFamily: poppins_Regular,
		fontSize: 11,
		color: "white",
		lineHeight: isAndroid ? 14 : undefined,
	},
});
