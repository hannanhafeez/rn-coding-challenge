import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { flex_1, items_center, justify_center } from "@/constants/common";
import { dark_bg } from "@/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
// const homeImg = require('@/assets/navigation/home.png');

// ScreenComponentType<ParamListBase, string>;

type HomePageViewProps = {};

export default function HomePageView({}: HomePageViewProps) {
	const { top } = useSafeAreaInsets();

	useEffect(() => {
		// console.log('lol');
	}, []);
	return (
		<View style={[flex_1, items_center, justify_center, css.container]}>
			<View style={[flex_1, {paddingTop: top}]}>
				<Header />
			</View>

			<StatusBar style="light" />
		</View>
	);
}

const css = StyleSheet.create({
	container: {
		backgroundColor: dark_bg,
	},
});
