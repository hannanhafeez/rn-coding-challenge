import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";

import { flex_1, items_center, row } from "@/constants/common";
import { dark_bg } from "@/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { poppins_Medium, poppins_Regular } from "@/constants/fonts";

const searchOutlineImg = require("@/assets/pages/search-outlined.png");
const avatarPic2 = require("@/assets/pages/profile2.png");
const moreImg = require("@/assets/pages/more.png");

import { isAndroid } from "@/utils/platform";

type ProjectDetailsPageViewProps = {
	canGoBack?: boolean,
	onBackPressed?: ()=>void,
	onSearchPressed?: () => void;
};

const BOTTOM_BAR_HEIGHT = 80;

export default function ProjectDetailsPageView({ canGoBack, onBackPressed }: ProjectDetailsPageViewProps) {
	const { top, bottom } = useSafeAreaInsets();
	const BOTTOM_CLEARANCE = Math.max(bottom, 20) + BOTTOM_BAR_HEIGHT;

	return (
		<View style={[flex_1, css.container]}>
			<View style={[{ paddingTop: top + 12 }]}>
				<Header hideUsersNumber canGoBack={canGoBack} onGoBack={onBackPressed}/>
			</View>


			<StatusBar style="light" />
		</View>
	);
}

const BORDER_COLOR = "#4D4D4D";
const INPUT_TEXT_COLOR = "#B5B5B5";

const css = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		backgroundColor: dark_bg,
	},
	input: {
		color: "white",
		fontSize: 16,
		marginBottom: isAndroid ? -3 : -1,
		fontFamily: poppins_Regular,
	},

	userHeading: {
		color: "white",
		fontSize: 16,
		lineHeight: isAndroid ? 19 : undefined,
		fontFamily: poppins_Medium,
	},
	userSubHeading: {
		color: "white",
		fontSize: 12,
		fontFamily: poppins_Regular,
	},
});
