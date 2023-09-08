import "react-native-gesture-handler";
import React from "react";
// import TestPage from "@/screens/test.page";
import { QueryClient, QueryClientProvider, focusManager } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";

function onAppStateChange(status: AppStateStatus) {
	// React Query already supports in web browser refetch on window focus by default
	if (Platform.OS !== "web") {
		focusManager.setFocused(status === "active");
	}
}

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 2 } },
});

import AppLoading from "expo-app-loading";
import {
	useFonts,
	Poppins_100Thin,
	Poppins_100Thin_Italic,
	Poppins_200ExtraLight,
	Poppins_200ExtraLight_Italic,
	Poppins_300Light,
	Poppins_300Light_Italic,
	Poppins_400Regular,
	Poppins_400Regular_Italic,
	Poppins_500Medium,
	Poppins_500Medium_Italic,
	Poppins_600SemiBold,
	Poppins_600SemiBold_Italic,
	Poppins_700Bold,
	Poppins_700Bold_Italic,
	Poppins_800ExtraBold,
	Poppins_800ExtraBold_Italic,
	Poppins_900Black,
	Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

import {
	NotoSans_400Regular,
	NotoSans_400Regular_Italic,
	NotoSans_500Medium,
	NotoSans_500Medium_Italic,
	NotoSans_600SemiBold,
	NotoSans_600SemiBold_Italic,
} from "@expo-google-fonts/noto-sans";
import TabNavigator from "@/navigation/TabNavigator";
import { AppStateStatus, Platform } from "react-native";
import { useAppState } from "@/hooks/useAppState";

export default function App() {
	useAppState(onAppStateChange);
	const [fontsLoaded] = useFonts({
		Poppins_100Thin,
		Poppins_100Thin_Italic,
		Poppins_200ExtraLight,
		Poppins_200ExtraLight_Italic,
		Poppins_300Light,
		Poppins_300Light_Italic,
		Poppins_400Regular,
		Poppins_400Regular_Italic,
		Poppins_500Medium,
		Poppins_500Medium_Italic,
		Poppins_600SemiBold,
		Poppins_600SemiBold_Italic,
		Poppins_700Bold,
		Poppins_700Bold_Italic,
		Poppins_800ExtraBold,
		Poppins_800ExtraBold_Italic,
		Poppins_900Black,
		Poppins_900Black_Italic,

		NotoSans_400Regular,
		NotoSans_400Regular_Italic,
		NotoSans_500Medium,
		NotoSans_500Medium_Italic,
		NotoSans_600SemiBold,
		NotoSans_600SemiBold_Italic,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		</QueryClientProvider>
	);
}
