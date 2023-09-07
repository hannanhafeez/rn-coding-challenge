import { flex_1, items_center, justify_between, justify_end, justify_start, row } from "@/constants/common";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const avatarPic = require("@/assets/pages/profile.png");
const avatarPic2 = require("@/assets/pages/profile2.png");
const avatarPic3 = require("@/assets/pages/profile3.png");
const arrowLeft = require("@/assets/pages/arrow-left.png");
const addImg = require("@/assets/pages/add.png");
const notificationImg = require("@/assets/pages/notification.png");
import Avatar from "@/components/Avatar";
import IconButton from "@/components/IconButton";
import { orange_bg } from "@/constants/colors";
import { noto_sans_Medium } from "@/constants/fonts";

type HeaderProps = {
	canGoBack?: boolean;
	hideUsersNumber?: boolean;
	onGoBack?: () => void;
};

const BUTTON_BG = "#2B2B2B";

export default function Header({ canGoBack = false, onGoBack, hideUsersNumber=false, }: HeaderProps) {
	return (
		<View style={[row, items_center, css.container]}>
			{/* Left Items */}
			<View style={[flex_1, row, items_center, justify_start, css.minGap]}>
				{canGoBack && (
					<IconButton onPress={onGoBack} size={48} backgroundColor={BUTTON_BG}>
						<Image source={arrowLeft} />
					</IconButton>
				)}

				<StackedAvatars hideUsersNumber={hideUsersNumber} />

				<IconButton size={40} backgroundColor={BUTTON_BG}>
					<Image source={addImg} style={{ width: 22, aspectRatio: 1 }} />
				</IconButton>
			</View>

			{/* Right Items */}
			<View style={[flex_1, row, items_center, justify_end, css.minGap]}>
				<IconButton size={44}>
					<View style={css.badge_bg}>
						<Text style={css.badge_text}>3</Text>
					</View>
					<Image source={notificationImg} />
				</IconButton>

				<Avatar size={52} title={"L S"} source={avatarPic} />
			</View>
		</View>
	);
}

const StackedAvatars = ({hideUsersNumber}:{hideUsersNumber?: boolean;}) => (
	<View style={[row, items_center, { gap: -18 }]}>
		<Avatar size={52} title={"L S"} source={avatarPic3} />
		<Avatar size={52} title={"L S"} source={avatarPic2} />
		{!hideUsersNumber && <Avatar size={52} title={"40+"} fontSize={12} />}
	</View>
);

const css = StyleSheet.create({
	container: {
		// paddingHorizontal: 20,
		gap: 12,
		minWidth: "100%",
	},
	minGap: { gap: 6 },
	badge_bg: {
		paddingHorizontal: 4,
		paddingVertical: 1,
		right: 5,
		top: 6,
		zIndex: 1,
		position: "absolute",
		borderRadius: 100,
		backgroundColor: orange_bg,
	},
	badge_text: {
		color: "white",
		fontSize: 11,
		lineHeight: 13,
		fontFamily: noto_sans_Medium,
	},
});
