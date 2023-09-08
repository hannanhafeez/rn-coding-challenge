import type { Dispatch, FC, SetStateAction } from "react";
import { Dimensions, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { poppins_Medium, poppins_Regular } from "@/constants/fonts";
import { isAndroid } from "@/utils/platform";
import { flex_1, items_center, justify_between, row } from "@/constants/common";
import { primary } from "@/constants/colors";

const smsImg = require("@/assets/pages/sms.png");

export type AddCollaboratorModalProps = {
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
	onAddPressed?: ((email: string) => void) | ((email: string) => Promise<void>);
};

const AddCollaboratorModal: FC<AddCollaboratorModalProps> = ({ setShow, show }) => {
	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={show}
			onRequestClose={() => {
				// Alert.alert("Modal has been closed.");
				setShow(false);
			}}
		>
			<View style={modalCss.centeredView}>
				<View style={modalOverlayStyle} onTouchEnd={() => setShow(false)} />
				<View style={modalCss.modalView}>
					<View>
						<Text style={modalCss.userHeading}>Invite Collaboraters</Text>
						<Text style={modalCss.userSubHeading}>Lorem ipsum dolor sit amet consectetur.</Text>
					</View>

					<View style={{ gap: 10 }}>
						<Text style={modalCss.userSubHeading}>Name or Email</Text>

						{/* Input Contaier */}
						<View style={inputContainerStyle}>
							<Image source={smsImg} />

							<TextInput
								style={[flex_1, modalCss.input]}
								placeholderTextColor={"white"}
								placeholder={"e.g John , john@gmail.com"}
								clearButtonMode={"always"}
							/>
						</View>
					</View>

					<Text style={modalCss.userSubHeading}>
						This site is protected by reCAPTCHA and the Google <LinkText title={"Privacy Policy"} /> and{" "}
						<LinkText title={"Terms of Service"} /> apply.
					</Text>

					<View style={btnRow}>
						<TouchableOpacity onPress={() => setShow(false)} style={modalCss.btnView}>
							<Text style={modalCss.btnText}>Cancel</Text>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => setShow(false)} style={[modalCss.btnView, { backgroundColor: primary }]}>
							<Text style={[modalCss.btnText, { fontSize: 16 }]}>Add Collaborater</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const LinkText: FC<{ title: string }> = ({ title }) => {
	return <Text style={modalCss.linkTextStyle}>{title}</Text>;
};

export default AddCollaboratorModal;

const { width } = Dimensions.get("screen");
const modalOverlayStyle = StyleSheet.flatten([StyleSheet.absoluteFillObject, { backgroundColor: "#00000033" }]);
const inputContainerStyle = StyleSheet.flatten([
	row,
	items_center,
	{
		borderRadius: 16,
		gap: 16,
		paddingVertical: 12,
		paddingHorizontal: 24,
		backgroundColor: "#090909",
	},
]);
const btnRow = StyleSheet.flatten([row, items_center, justify_between, { gap: 12 }]);

const modalCss = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		gap: 24,
		width: Math.max(320, width - 18),
		margin: 20,
		backgroundColor: "#121212",
		borderRadius: 32,
		paddingVertical: 32,
		paddingHorizontal: 24,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 12,
		elevation: 5,
	},

	userHeading: {
		color: "white",
		fontSize: 22,
		lineHeight: isAndroid ? 19 : undefined,
		fontFamily: poppins_Medium,
	},
	userSubHeading: {
		color: "white",
		fontSize: 14,
		fontFamily: poppins_Regular,
	},

	input: {
		color: "white",
		fontSize: 16,
		marginBottom: isAndroid ? -3 : -1,
		fontFamily: poppins_Regular,
	},

	linkTextStyle: {
		color: primary,
		textDecorationLine: "underline",
	},

	btnView: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 100,
	},
	btnText: {
		color: "white",
		fontSize: 14,
		fontFamily: poppins_Regular,
	},
});
