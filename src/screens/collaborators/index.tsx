import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { ParamListBase } from "@react-navigation/native";
import CollaboratorsPageView from "./view";
import { useCallback, useState } from "react";

const dummyData = Array.from({ length: 8 }, (_, num) => ({ id: `esther-howard-${num}`, name: "Esther Howard", email: "esther@gmail.com" }));

export default function CollaboratorsPage({}: BottomTabScreenProps<ParamListBase, string>) {
	const [data, setData ] = useState(dummyData);

	const onDelete = useCallback((id: string)=>{
		console.log(id)
		setData(currentData => currentData.filter(item=>item.id !== id));
	},[data])

	return <CollaboratorsPageView collaboratorData={data} onDelete={onDelete} />;
}
