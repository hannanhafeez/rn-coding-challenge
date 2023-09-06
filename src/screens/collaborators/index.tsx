import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { ParamListBase } from "@react-navigation/native";
import CollaboratorsPageView from "./view";


export default function CollaboratorsPage({}: BottomTabScreenProps<ParamListBase, string>) {
	return <CollaboratorsPageView />;
}
