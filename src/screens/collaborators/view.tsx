import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { flex_1, items_center, row } from "@/constants/common";
import { dark_bg, pink_text } from "@/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { noto_sans_Regular, poppins_Medium, poppins_Regular } from "@/constants/fonts";

const searchOutlineImg = require("@/assets/pages/search-outlined.png");
const avatarPic2 = require("@/assets/pages/profile2.png");
const moreImg = require("@/assets/pages/more.png");

import { isAndroid } from "@/utils/platform";
import Avatar from "@/components/Avatar";
import IconButton from "@/components/IconButton";

type CollaboratorsPageViewProps = {
	onSearchPressed?: () => void;
};

const dummyData = Array.from({ length: 8 }, (_, num) => ({ id: `esther-howard-${num}`, name: "Esther Howard", email: "esther@gmail.com" }));

const BOTTOM_BAR_HEIGHT = 80;

export default function CollaboratorsPageView({}: CollaboratorsPageViewProps) {
	const { top, bottom } = useSafeAreaInsets();
	const BOTTOM_CLEARANCE = Math.max(bottom, 20) + BOTTOM_BAR_HEIGHT;

	return (
		<View style={[flex_1, css.container]}>
			<View style={[{ paddingTop: top + 12 }]}>
				<Header hideUsersNumber />
			</View>

			{/* Input Contaier */}
			<View
				style={[
					row,
					items_center,
					{ marginTop: 28, borderColor: BORDER_COLOR, borderWidth: 1, borderRadius: 25, gap: 8, padding: 16 },
				]}
			>
				<Image source={searchOutlineImg} tintColor={INPUT_TEXT_COLOR} />

				<TextInput
					style={[flex_1, css.input]}
					placeholder={"Search for collaborater"}
					placeholderTextColor={INPUT_TEXT_COLOR}
					clearButtonMode={"always"}
				/>
			</View>

			<FlatList
				data={dummyData}
				renderItem={({ item: { name, email } }) => {
					return (
						<View style={[row, items_center, { paddingVertical: 24, gap: 14 }]}>
							<Avatar size={56} title={"L S"} source={avatarPic2} />
							<View style={[flex_1, { gap: 2 }]}>
								<Text style={css.userHeading}>{name}</Text>
								<Text style={css.userSubHeading}>{email}</Text>
							</View>

							<IconButton size={36} backgroundColor={"rgba(205, 205, 205, 0.2)"}>
								<Image source={moreImg} style={{ width: 18, height: 18 }} />
							</IconButton>
						</View>
					);
				}}
				ItemSeparatorComponent={() => <View style={{ height: 1, flex: 1, backgroundColor: "whitrgba(255, 255, 255, 0.04);e" }} />}
				ListHeaderComponent={() => <View style={{ height: 12 }} />}
				ListFooterComponent={() => <View style={{ height: BOTTOM_CLEARANCE }} />}
				keyExtractor={(item) => item.id}
			/>

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
