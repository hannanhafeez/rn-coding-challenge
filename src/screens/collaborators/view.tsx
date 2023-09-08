import { StatusBar } from "expo-status-bar";
import { Dimensions, FlatList, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { flex_1, items_center, row } from "@/constants/common";
import { dark_bg } from "@/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { poppins_Medium, poppins_Regular } from "@/constants/fonts";

const searchOutlineImg = require("@/assets/pages/search-outlined.png");
const avatarPic2 = require("@/assets/pages/profile2.png");
const moreImg = require("@/assets/pages/more.png");
const trashImg = require("@/assets/pages/trash.png");

import { isAndroid } from "@/utils/platform";
import Avatar from "@/components/Avatar";
import IconButton from "@/components/IconButton";
import { useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AddCollaboratorModal from "./AddCollaboratorModal";

type CollaboratorDataType = {
	id: string;
	name: string;
	email: string;
};

type CollaboratorsPageViewProps = {
	collaboratorData?: CollaboratorDataType[];
	onDelete?: (id: string) => void;
	onSearchPressed?: () => void;
};

const BOTTOM_BAR_HEIGHT = 80;

export default function CollaboratorsPageView({ collaboratorData, onDelete }: CollaboratorsPageViewProps) {
	const { top, bottom } = useSafeAreaInsets();
	const BOTTOM_CLEARANCE = Math.max(bottom, 20) + BOTTOM_BAR_HEIGHT;

	const [show, setShow] = useState(false);

	const rows = useRef<Array<any>>([]);
	const prevOpenedRow = useRef<any>(null);

	const renderItem = ({ item: { name, email }, index }: { item: CollaboratorDataType; index: number }, onClick: () => void) => {
		//
		const closeRow = (index: number) => {
			if (prevOpenedRow && prevOpenedRow !== rows.current?.[index]) {
				prevOpenedRow.current?.close?.();
			}
			prevOpenedRow.current = rows.current?.[index];
		};

		const renderRightActions = (onClick: () => void) => {
			return (
				<TouchableOpacity
					onPress={onClick}
					style={{
						margin: 0,
						alignItems: "center",
						justifyContent: "center",
						width: 70,
						backgroundColor: "red",
					}}
				>
					<Image source={trashImg} />
				</TouchableOpacity>
			);
		};

		return (
			<Swipeable
				renderRightActions={(progress, dragX) => renderRightActions(onClick)}
				onSwipeableOpen={() => closeRow(index)}
				ref={(ref) => rows.current[index] = ref}
				//@ts-ignore
				rightOpenValue={-100}
			>
				<View style={[row, items_center, { backgroundColor: dark_bg, paddingVertical: 24, paddingHorizontal: 20, gap: 14 }]}>
					<Avatar size={56} title={"L S"} source={avatarPic2} />
					<View style={[flex_1, { gap: 2 }]}>
						<Text style={css.userHeading}>{name}</Text>
						<Text style={css.userSubHeading}>{email}</Text>
					</View>

					<IconButton size={36} backgroundColor={"rgba(205, 205, 205, 0.2)"}>
						<Image source={moreImg} style={{ width: 18, height: 18 }} />
					</IconButton>
				</View>
			</Swipeable>
		);
	};

	return (
		<>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<View style={[flex_1, css.container]}>
					<View style={[{ paddingTop: top + 12 }]}>
						<Header hideUsersNumber onAddPredded={() => setShow(true)} />
					</View>

					{/* Input Contaier */}
					<View
						style={[
							row,
							items_center,
							{
								marginTop: 28,
								marginBottom: 8,
								borderColor: BORDER_COLOR,
								borderWidth: 1,
								borderRadius: 25,
								gap: 8,
								padding: 16,
							},
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

					<View style={{ flex: 1, marginHorizontal: -20 }}>
						<FlatList
							data={collaboratorData}
							renderItem={(v) =>
								renderItem(v, () => {
									// console.log("Pressed", v);
									onDelete?.(v.item.id);
								})
							}
							ItemSeparatorComponent={() => (
								<View style={{ paddingHorizontal: 20 }}>
									<View style={{ height: 1, flex: 1, backgroundColor: "whitrgba(255, 255, 255, 0.04);e" }} />
								</View>
							)}
							ListHeaderComponent={() => <View style={{ height: 4 }} />}
							ListFooterComponent={() => <View style={{ height: BOTTOM_CLEARANCE }} />}
							keyExtractor={(item) => item.id}
						/>
					</View>

					<StatusBar style="light" />
				</View>
			</GestureHandlerRootView>

			<AddCollaboratorModal show={show} setShow={setShow} />
		</>
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
