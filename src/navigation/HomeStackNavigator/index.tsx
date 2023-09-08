import HomePage from "@/screens/home";
import ProjectDetailsPage from "@/screens/project-details";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const HOME_STACK_SCREEN_NAMES = {
	home: 'Home',
	project_details: "Project Details",
}

export default function HomeStack({navigation, route}: BottomTabScreenProps<ParamListBase, string>) {

	return (
		<Stack.Navigator initialRouteName={HOME_STACK_SCREEN_NAMES.home} screenOptions={{ headerShown: false }}>
			<Stack.Screen name={HOME_STACK_SCREEN_NAMES.home} component={HomePage} />
			<Stack.Screen name={HOME_STACK_SCREEN_NAMES.project_details} component={ProjectDetailsPage} />
		</Stack.Navigator>
	);
}
