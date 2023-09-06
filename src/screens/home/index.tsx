import { useEffect } from "react";

import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { ParamListBase } from "@react-navigation/native";
import HomePageView from "./view";
// const homeImg = require('@/assets/navigation/home.png');

// ScreenComponentType<ParamListBase, string>;

export default function HomePage({ route }: BottomTabScreenProps<ParamListBase, string>) {
	useEffect(() => {
		// console.log('lol');
	}, []);
	return (
		<HomePageView />
	);
}