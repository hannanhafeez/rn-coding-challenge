import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { flex_1, items_center, justify_center } from "@/constants/common";
import { dark_bg } from "@/constants/colors";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { ParamListBase } from "@react-navigation/native";
// const homeImg = require('@/assets/navigation/home.png');

// ScreenComponentType<ParamListBase, string>;

export default function TestPage({ route }: BottomTabScreenProps<ParamListBase, string>) {
	useEffect(() => {
		// console.log('lol');
	}, []);
	return (
		<View style={[flex_1, items_center, justify_center, css.container]}>
			<Text style={{ color: "white" }}>{route.name}</Text>

			<StatusBar style="light" />
		</View>
	);
}

const css = StyleSheet.create({
	container: {
		backgroundColor: dark_bg,
	},
});
