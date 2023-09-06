import type { FC } from "react";
import Avatar from "@/components/Avatar";
import BarChart from "@/components/BarChart";
import IconButton from "@/components/IconButton";
import { primary, yellow_text } from "@/constants/colors";
import { items_center, justify_between, row } from "@/constants/common";
import { poppins_Medium, poppins_Regular } from "@/constants/fonts";
import { isAndroid } from "@/utils/platform";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const avatarPic2 = require("@/assets/pages/profile2.png");
const avatarPic3 = require("@/assets/pages/profile3.png");
const addImg = require("@/assets/pages/add.png");
const shareImg = require("@/assets/pages/share.png");
const moreImg = require("@/assets/pages/more.png");
const userImg = require("@/assets/pages/user.png");
const messageImg = require("@/assets/pages/message-text.png");
const calendarImg = require("@/assets/pages/calendar.png");

const barData = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((label)=>({label, percentage: Math.min(0.3 + Math.random(), 0.9)}))

export type UserInfoCardProps = {};

const UserInfoCard: FC<UserInfoCardProps> = ({}) => {
	return (
		<View style={css.cardContainer}>
			<View style={[row, items_center, justify_between]}>
				{/* Left Items */}
				<StackedAvatars />

				{/* Right Items */}
				<View style={[row, items_center, { gap: 8 }]}>
					<IconButton size={36} backgroundColor={"#6646B9"}>
						<Image source={shareImg} style={{ width: 16, height: 16 }} />
					</IconButton>
					<IconButton size={36} backgroundColor={"rgba(205, 205, 205, 0.2)"}>
						<Image source={moreImg} style={{ width: 16, height: 16 }} />
					</IconButton>
				</View>
			</View>

			<View style={[row, items_center, { gap: 14 }]}>
				<Image source={userImg} width={74} height={74} style={{ borderRadius: 24 }} />

				<View>
					<Text style={css.smallUserHeading}>Ads Video Editor</Text>
					<Text style={css.bigUserHeading}>First Project</Text>
				</View>
			</View>

			<View style={{ gap: 24 }}>
				<BarChart barData={barData} />

				{/* Last Row */}
				<View style={[row, items_center, justify_between, { gap: 8 }]}>
					{/* Badges */}
					<View style={[row, items_center, { gap: 6 }]}>
						<View style={css.badgeView}>
							<Image source={messageImg} style={css.badgeImg} />
							<Text style={css.badgeText}>2</Text>
						</View>
						<View style={css.badgeView}>
							<Image source={calendarImg} style={css.badgeImg} />
							<Text style={css.badgeText}>30 Mar : 2023</Text>
						</View>
					</View>

					<TouchableOpacity style={css.pendingBtnView}>
						<Text style={css.pendingBtnText}>Pending</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const StackedAvatars = () => (
	<View style={[row, items_center, { gap: -12 }]}>
		<Avatar size={36} title={"L S"} source={avatarPic3} borderColor={primary} borderWidth={2} />
		<Avatar size={36} title={"L S"} source={avatarPic2} borderColor={primary} borderWidth={2} />
		<Avatar size={36} title={"L S"} source={avatarPic3} borderColor={primary} borderWidth={2} />
		<IconButton size={36} backgroundColor={"#6646B9"}>
			<Image source={addImg} style={{ width: 20, height: 20, }} />
		</IconButton>
	</View>
);

export default UserInfoCard;

const css = StyleSheet.create({
	cardContainer: {
		padding: 24,
		borderRadius: 32,
		backgroundColor: primary,
		gap: 32,
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

	badgeView: {
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
		paddingHorizontal: 10,
		gap: 6,
		borderRadius: 12,
		backgroundColor: "#6546B5",
	},
	badgeImg: {
		width: 18,
		height: 18,
	},
	badgeText: {
		color: "white",
		fontSize: 14,
		lineHeight: isAndroid ? 19 : undefined,
		fontFamily: poppins_Regular,
	},

	pendingBtnView: {
		paddingVertical: 9,
		paddingHorizontal: 24,
		borderRadius: 100,
		backgroundColor: "rgba(255, 201, 97, 0.3)",
	},
	pendingBtnText: {
		color: yellow_text,
		fontSize: 12,
		lineHeight: 18,
		fontFamily: poppins_Regular,
	},
});
