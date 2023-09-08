import { delay } from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

type CollaboratorsData = { id: string; name: string; email: string };

export const dummyData = Array.from({ length: 4 }, (_, num) => ({ id: `esther-howard-${num}`, name: "Esther Howard", email: "esther@gmail.com" }));

const getCollaborator = async () => {
	await delay(3000);

	return dummyData;
};

const deleteCollaborator = async (id: string) => {
	await delay(3000);

	return dummyData.filter(item=>item.id !==id);
};

export const useCollaboratorData = () => useQuery<CollaboratorsData[], Error>(["collaborators"], () => getCollaborator());
