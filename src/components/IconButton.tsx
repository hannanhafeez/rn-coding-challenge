import { dark_bg } from '@/constants/colors';
import { place_center } from '@/constants/common';
import type { FC, ReactNode } from 'react'
import { ColorValue, TouchableOpacity, View } from 'react-native'

export type IconButtonProps = {
	onPress?: ()=>void,
	backgroundColor?: ColorValue,
	size?:number,
	children?: ReactNode,
}

const IconButton:FC<IconButtonProps> = ({ onPress, backgroundColor=dark_bg, size= 32, children }) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
			<View style={[place_center, { backgroundColor, width: size, height: size, borderRadius: size/2 }]}>
				{children}
			</View>
		</TouchableOpacity>
	);
}

export default IconButton