import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { ParamListBase } from "@react-navigation/native";
import HomePageView from "./view";

import dayjs from "dayjs";

// const homeImg = require('@/assets/navigation/home.png');

// ScreenComponentType<ParamListBase, string>;

const categoryList: { name: string; count: number }[] = [
	{
		name: "All",
		count: 7,
	},
	{
		name: "Marketing Videos",
		count: 3,
	},
	{
		name: "AI Generated Videos",
		count: 2,
	},
	{
		name: "Pending Videos",
		count: 2,
	},
];

export default function HomePage({}: BottomTabScreenProps<ParamListBase, string>) {
	const timeText = dayjs().format("HH:mm");
	const dayText = dayjs().format("dddd");

	return <HomePageView categoryList={categoryList} timeText={timeText} dayText={dayText} />;
}
