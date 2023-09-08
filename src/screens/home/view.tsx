import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";

import { flex_1, items_center, justify_between, place_center, row } from "@/constants/common";
import { dark_bg, pink_text, primary } from "@/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { noto_sans_Regular, poppins_Medium, poppins_Regular } from "@/constants/fonts";

const searchOutlineImg = require("@/assets/pages/search-outlined.png");

import IconButton from "@/components/IconButton";
import UserInfoCard from "../../components/UserInfoCard";
import { isAndroid } from "@/utils/platform";
import { CategoryData } from "@/query/categories";

type HomePageViewProps = {
	timeText: string;
	dayText: string;
	categoryList?: CategoryData[];
	categoryListLoading?: boolean;
	onSearchPressed?: () => void;
	onShowProjectDetail?: (id?: string) => void;
};

const BOTTOM_BAR_HEIGHT = 80;

export default function HomePageView({
	timeText,
	dayText,
	categoryList,
	categoryListLoading,
	onSearchPressed,
	onShowProjectDetail,
}: HomePageViewProps) {
	const { top, bottom } = useSafeAreaInsets();

	const [seletedCategory, setSeletedCategory] = useState<string | null>(categoryList?.[0].name || null);

	const BOTTOM_CLEARANCE = Math.max(bottom, 10) + BOTTOM_BAR_HEIGHT;

	return (
		<View style={[flex_1, css.container]}>
			<View style={[{ paddingTop: top + 12, paddingBottom: 8 }]}>
				<Header />
			</View>

			<ScrollView
				style={[flex_1, { marginHorizontal: -20 }]}
				contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: BOTTOM_CLEARANCE }}
			>
				<View style={{ marginVertical: 20, gap: 20 }}>
					{/* Gradient Text View */}
					<MaskedView
						style={{ height: 24, width: "80%" }}
						maskElement={<Text style={{ fontSize: 14, fontFamily: poppins_Regular }}>Your recent videos</Text>}
					>
						<LinearGradient
							colors={["#F2AC8A", "#8386FF", "#9B74FF"]}
							start={{ x: 0, y: 1 }}
							end={{ x: 1, y: 1 }}
							style={{ flex: 1, height: 24 }}
						/>
					</MaskedView>

					{/* Day Time View */}
					<View style={[row, items_center, justify_between]}>
						<View style={{ gap: -20 }}>
							<Text numberOfLines={1} style={css.timeText}>
								{timeText}
							</Text>
							<Text numberOfLines={1} style={css.dayText}>
								{dayText}
							</Text>
						</View>
						<IconButton onPress={onSearchPressed} size={58} backgroundColor={"#1B1B1B"}>
							<Image source={searchOutlineImg} />
						</IconButton>
					</View>

					{categoryListLoading ? (
						<ActivityIndicator size={"small"} color={primary} />
					) : (
						<>
							{/* Category List View */}
							{categoryList && (
								<View style={{ marginHorizontal: -20 }}>
									<FlatList
										horizontal
										data={categoryList}
										renderItem={({ item: { name, count } }) => {
											const selected = seletedCategory === name;
											return (
												<TouchableOpacity onPress={() => setSeletedCategory((cat) => (cat === name ? null : name))}>
													<View
														style={[row, items_center, categoryCss.view, selected && categoryCss.view_active]}
													>
														<Text style={[categoryCss.text, selected && { color: "white" }]}>{name}</Text>
														<View
															style={[
																place_center,
																categoryCss.badge_view,
																selected && { backgroundColor: "#8150FF" },
															]}
														>
															<Text style={[categoryCss.badge_text, selected && { color: "white" }]}>
																{count}
															</Text>
														</View>
													</View>
												</TouchableOpacity>
											);
										}}
										keyExtractor={(item) => item.name}
										ListHeaderComponent={() => <View style={{ width: 20 }} />}
										ListFooterComponent={() => <View style={{ width: 20 }} />}
										ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
									/>
								</View>
							)}

							{/* <View style={{ height: 800, backgroundColor: "red" }}></View> */}
							<UserInfoCard onShowProjectDetail={onShowProjectDetail} />
						</>
					)}
				</View>
			</ScrollView>

			<StatusBar style="light" />
		</View>
	);
}

const UNSELECTED_COLOR = "#6D6D6D";
const css = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		backgroundColor: dark_bg,
	},
	timeText: {
		fontSize: 60,
		lineHeight: 72,
		fontFamily: poppins_Medium,
		color: "white",
	},
	dayText: {
		fontSize: 42,
		fontFamily: poppins_Regular,
		color: pink_text,
	},
});

const categoryCss = StyleSheet.create({
	view: {
		borderColor: UNSELECTED_COLOR,
		borderWidth: 1,
		borderRadius: 25,
		gap: 8,
		padding: 16,
	},
	view_active: { backgroundColor: "#6B32FF", borderColor: "transparent" },
	text: {
		color: UNSELECTED_COLOR,
		fontSize: 16,
		lineHeight: isAndroid ? 22 : undefined,
		fontFamily: poppins_Regular,
	},
	badge_view: {
		backgroundColor: "#3D3D3D",
		borderRadius: 6,
		paddingHorizontal: 4,
		paddingVertical: 2,
		minWidth: 18,
	},
	badge_text: {
		color: "#CBCBCB",
		fontSize: 12,
		lineHeight: 16,
		fontFamily: noto_sans_Regular,
	},
});
