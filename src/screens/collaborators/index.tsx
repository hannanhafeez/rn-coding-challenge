import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { ParamListBase } from "@react-navigation/native";
import CollaboratorsPageView from "./view";
import { useCallback, useState } from "react";
import { dummyData } from "@/query/collborators";

export default function CollaboratorsPage({}: BottomTabScreenProps<ParamListBase, string>) {
	const [data, setData ] = useState(dummyData);

	const onDelete = useCallback((id: string)=>{
		console.log(id)
		setData(currentData => currentData.filter(item=>item.id !== id));
	},[data])

	return <CollaboratorsPageView collaboratorData={data} onDelete={onDelete} />;
}
