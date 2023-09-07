import type { StackScreenProps } from "@react-navigation/stack";
import type { ParamListBase } from "@react-navigation/native";
import ProjectDetailsPageView from "./view";

export default function ProjectDetailsPage({navigation}: StackScreenProps<ParamListBase, string>) {
	return <ProjectDetailsPageView canGoBack={navigation.canGoBack()} onBackPressed={navigation.goBack}/>;
}
