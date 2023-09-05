import { dark_bg } from "@/constants/colors";
import { flex_1, items_center, justify_center } from "@/constants/common";
import { poppins_Bold, poppins_Bold_Italic, poppins_Light } from "@/constants/fonts";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// const homeImg = require('@/assets/navigation/home.png');

// ScreenComponentType<ParamListBase, string>;

export default function TestPage({navigation, route}: BottomTabScreenProps<ParamListBase, string>) {
	useEffect(() => {
		// console.log('lol');
	}, []);
	return (
		<View style={[flex_1, items_center, justify_center, css.container]}>
			<Text style={{ color: "white" }}>{route.name}</Text>

			<StatusBar style="auto" />
		</View>
	);
}

const css = StyleSheet.create({
	container: {
		backgroundColor: dark_bg,
	},
});
