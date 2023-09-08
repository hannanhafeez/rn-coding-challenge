import { StatusBar } from "expo-status-bar";
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { flex_1, items_center, justify_between, row } from "@/constants/common";
import { dark_bg, primary } from "@/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { poppins_Medium, poppins_Regular } from "@/constants/fonts";

const userDetailImg = require("@/assets/user-detail.png");
const moreImg = require("@/assets/pages/more.png");
const calendarImg = require("@/assets/pages/calendar.png");
const arrowLeft = require("@/assets/pages/arrow-left.png");

import { isAndroid } from "@/utils/platform";
import IconButton from "@/components/IconButton";
import { StackedAvatars, cardCss } from "../../components/UserInfoCard";
import BarChart from "@/components/BarChart";

type ProjectDetailsPageViewProps = {
	canGoBack?: boolean;
	onBackPressed?: () => void;
	onSearchPressed?: () => void;
};

const BOTTOM_BAR_HEIGHT = 80;
const { width } = Dimensions.get("screen");

const barData = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((label) => ({
	label,
	percentage: Math.min(0.3 + Math.random(), 0.85),
}));

const data_length = Math.max(barData.length, 2);
const BAR_DISTANCE = 20;
const BAR_WIDTH = (width - 40) / 7 - ((BAR_DISTANCE * data_length) / data_length - 2);

export default function ProjectDetailsPageView({ canGoBack, onBackPressed }: ProjectDetailsPageViewProps) {
	const { top, bottom } = useSafeAreaInsets();
	const BOTTOM_CLEARANCE = Math.max(bottom, 20) + BOTTOM_BAR_HEIGHT;

	return (
		<View style={[flex_1, css.container]}>
			<View style={[{ position: "absolute", zIndex: 1, left: 20, right: 20, top: top + 12 }]}>
				<Header hideUsersNumber canGoBack={canGoBack} onGoBack={onBackPressed} />
			</View>

			<ScrollView>
				<View style={{ paddingBottom: BOTTOM_CLEARANCE }}>
					<Image
						source={userDetailImg}
						style={{ width, height: width, borderBottomLeftRadius: 44, borderBottomRightRadius: 44, resizeMode: "cover" }}
					/>

					{/* Detail */}
					<View style={[css.horizontalPadding, { paddingVertical: 20, gap: 16 }]}>
						<View style={[row, items_center, { gap: 8 }]}>
							<View style={flex_1}>
								<Text style={css.smallUserHeading}>Ads Video Editor</Text>
								<Text style={css.bigUserHeading}>First Project</Text>
							</View>
							<IconButton size={32} backgroundColor={"rgba(205, 205, 205, 0.2)"}>
								<Image source={moreImg} style={{ width: 16, height: 16 }} />
							</IconButton>
						</View>

						<View style={{ gap: 12 }}>
							<View style={labelRowStyle}>
								<Text style={css.labelText}>Project Date:</Text>

								<View style={cardCss.badgeView}>
									<Image source={calendarImg} style={cardCss.badgeImg} />
									<Text style={cardCss.badgeText}>30 Mar : 2023</Text>
								</View>
							</View>

							<View style={labelRowStyle}>
								<Text style={css.labelText}>Collaborators:</Text>

								<StackedAvatars />
							</View>

							<View style={labelRowStyle}>
								<Text style={css.labelText}>Status</Text>

								<TouchableOpacity style={cardCss.pendingBtnView}>
									<Text style={cardCss.pendingBtnText}>Pending</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>

					<View style={css.horizontalPadding}>
						<View style={css.horizontalDivider} />
					</View>

					<View style={[css.horizontalPadding, { paddingVertical: 20, gap: 20 }]}>
						<View style={[row, items_center, { gap: 8 }]}>
							<View style={flex_1}>
								<Text style={css.bigUserHeading}>Statistics</Text>
							</View>
							<TouchableOpacity>
								<View style={[row, items_center, css.ddView]}>
									<Text style={[css.ddText]}>{"Weekly"}</Text>

									<Image source={arrowLeft} style={css.ddImg} />
								</View>
							</TouchableOpacity>
						</View>
						<View>
							<BarChart barData={barData} barWidth={BAR_WIDTH} barDistance={BAR_DISTANCE} />
						</View>
					</View>
				</View>
			</ScrollView>

			<StatusBar style="light" />
		</View>
	);
}

const labelRowStyle = StyleSheet.flatten([row, justify_between, items_center]);

const css = StyleSheet.create({
	container: {
		backgroundColor: primary,
	},
	horizontalPadding: {
		paddingHorizontal: 20,
	},
	smallUserHeading: {
		color: "white",
		fontSize: 12,
		fontFamily: poppins_Regular,
	},
	bigUserHeading: {
		color: "white",
		fontSize: 24,
		lineHeight: isAndroid ? 32 : undefined,
		fontFamily: poppins_Medium,
	},

	labelText: {
		fontSize: 14,
		fontFamily: poppins_Regular,
		color: "white",
	},

	horizontalDivider: {
		height: 1,
		backgroundColor: "rgba(255, 255, 255, 0.17)",
		alignSelf: "stretch",
	},

	ddView: {
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 40,
		gap: 8,
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	ddText: {
		color: "white",
		fontSize: 16,
		lineHeight: isAndroid ? 22 : undefined,
		fontFamily: poppins_Regular,
	},
	ddImg: { width: 18, height: 18, transform: [{ rotate: "-90deg" }] },
});
