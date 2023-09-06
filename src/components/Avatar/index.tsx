import { dark_bg } from "@/constants/colors";
import { noto_sans_Regular } from "@/constants/fonts";
import { memo, type FC } from "react";
import { View, type ImageSourcePropType, Image, Text, ColorValue, StyleSheet, TouchableOpacity } from "react-native";

export type AvatarProps = {
	size?: number;
	source?: ImageSourcePropType;
	title?: string;
	backgroundColor?: ColorValue;
	borderWidth?: number;
	borderColor?: ColorValue;
	fontSize?: number;
	color?: ColorValue;
	onPress?: () => void;
};

const Avatar: FC<AvatarProps> = memo(
	({ size = 24, source, title = "", backgroundColor = "black", borderColor = dark_bg, borderWidth = 4, fontSize=14, color, onPress}) => {
		const split = title
			.split(" ")

		const str =	split.length > 1 ? split
			.slice(0, 2)
			.map((word) => word[0])
			.join('').toUpperCase() : split[0];

		const innerView = (
			<View
				style={{
					overflow: "hidden",
					width: size,
					height: size,
					borderRadius: size / 2,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor,
					borderWidth,
					borderColor,
				}}
			>
				{source ? (
					<Image
						source={source}
						resizeMode={"cover"}
						style={{
							width: size,
							height: size,
							borderRadius: size / 2,
							backgroundColor,
							borderWidth,
							borderColor,
						}}
					/>
				) : (
					<Text style={[css.textStyle, { fontSize }, !!color && { color }]}>{str}</Text>
				)}
			</View>
		);

		if(onPress) return (
			<TouchableOpacity onPress={onPress} activeOpacity={0.6}>
				{innerView}
			</TouchableOpacity>
		);

		return innerView;
	},
);

export default Avatar;

const css = StyleSheet.create({
	textStyle: {
		color: "white",
		fontFamily: noto_sans_Regular,
	},
});
