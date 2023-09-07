import { primary } from "@/constants/colors";
import { column, items_center, justify_between, row } from "@/constants/common";
import CollaboratorsPage from "@/screens/collaborators";
import HomePage from "@/screens/home";
import TestPage from "@/screens/test.page";
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeStack from "@/navigation/HomeStackNavigator";

const Tab = createBottomTabNavigator();

const pagesList = [
	{ name: "Home Stack", component: HomeStack, icon: require("@/assets/navigation/home.png") },
	{ name: "Search", component: TestPage, icon: require("@/assets/navigation/search.png") },
	{ name: "Folders", component: TestPage, icon: require("@/assets/navigation/folder.png") },
	{ name: "Collaborators", component: CollaboratorsPage, icon: require("@/assets/navigation/profile.png") },
	{ name: "Setting", component: TestPage, icon: require("@/assets/navigation/setting.png") },
];

const ICON_SIZE = 24;

export default function TabNavigator() {
	return (
		<Tab.Navigator
			initialRouteName={"Home"}
			tabBar={(props) => <TabBar {...props} />}
			screenOptions={{
				headerShown: false,
			}}
		>
			{pagesList.map(({ name, component, icon }) => (
				<Tab.Screen
					key={name}
					name={name}
					component={component}
					options={{
						tabBarShowLabel: false,
						tabBarIcon(props) {
							return (
								<Image width={ICON_SIZE} height={ICON_SIZE} source={icon} tintColor={props.focused ? primary : "white"} />
							);
						},
					}}
				/>
			))}
		</Tab.Navigator>
	);
}

/* Black Tab Bar - Start*/

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	const { bottom } = useSafeAreaInsets();

	return (
		<View
			style={[
				row,
				justify_between,
				items_center,
				{
					position: "absolute",
					bottom: Math.max(bottom, 16),
					left: 20,
					right: 20,
					padding: 12,
					borderRadius: 24,
					backgroundColor: "black",
				},
			]}
		>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				// const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

				const Icon = options.tabBarIcon;

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						// The `merge: true` option makes sure that the params inside the tab screen are preserved
						// @ts-ignore
						navigation.navigate({ name: route.name, merge: true });
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TouchableOpacity
						key={route.key}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={[items_center, { padding: 8, gap: 8 }]}
					>
						<IconWithDot isFocused={isFocused} index={state.index} Icon={Icon} />
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

type IconType = (props: { focused: boolean; color: string; size: number }) => React.ReactNode;
const DOT_SIZE = 7;
const ANIMATION_DURATION = 250; // in milliseconds

const IconWithDot = ({ isFocused, index, Icon }: { isFocused: boolean; index: number; Icon?: IconType }) => {
	const animatedScale = useRef(new Animated.Value(0)).current;
	const animatedPosition = useRef(new Animated.Value(DOT_SIZE)).current;

	const animateScaleTo = (toValue: 0 | 1) =>
		Animated.timing(animatedScale, {
			toValue: toValue,
			easing: Easing.ease,
			duration: ANIMATION_DURATION,
			useNativeDriver: true,
		});
	const animatePositionTo = (toValue: number) =>
		Animated.timing(animatedPosition, {
			toValue: toValue,
			easing: Easing.ease,
			duration: ANIMATION_DURATION,
			useNativeDriver: true,
		});

	useEffect(() => {
		if (isFocused) {
			Animated.parallel([animatePositionTo(0), animateScaleTo(1)]).start();
			// animateScaleTo(1);
		} else {
			Animated.parallel([animatePositionTo(DOT_SIZE), animateScaleTo(0)]).start();
		}
	}, [index]);

	return (
		<>
			<Animated.View
				style={{
					transform: [{ translateY: animatedPosition }],
				}}
			>
				{Icon?.({ color: "white", focused: isFocused, size: 24 })}
			</Animated.View>
			<Animated.View
				style={{
					height: DOT_SIZE,
					aspectRatio: 1,
					borderRadius: DOT_SIZE / 2,
					backgroundColor: primary,
					transform: [{ scale: animatedScale }],
				}}
			/>
		</>
	);
};

/* Black Tab Bar - End*/