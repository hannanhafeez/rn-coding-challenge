import type { StackScreenProps } from "@react-navigation/stack";
import { type ParamListBase } from "@react-navigation/native";
import HomePageView from "./view";

import dayjs from "dayjs";
import { HOME_STACK_SCREEN_NAMES } from "@/navigation/HomeStackNavigator";
import { useCategoryData } from "@/query/categories";

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

export default function HomePage({ navigation }: StackScreenProps<ParamListBase, string>) {
	const timeText = dayjs().format("HH:mm");
	const dayText = dayjs().format("dddd");

	const { data, isLoading, isError } = useCategoryData();

	const onShowProjectDetail = (id?: string) => {
		navigation.navigate(HOME_STACK_SCREEN_NAMES.project_details);
	};

	return (
		<HomePageView
			categoryList={data}
			categoryListLoading={isLoading}
			timeText={timeText}
			dayText={dayText}
			onShowProjectDetail={onShowProjectDetail}
		/>
	);
}
