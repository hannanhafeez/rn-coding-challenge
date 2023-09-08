import { delay } from "@/utils/delay";
import { useQuery } from "@tanstack/react-query";

export type CategoryData = { name: string; count: number };

const categoryList: { name: string; count: number }[] = [
	{
		name: "All",
		count: 7,
	},
	{
		name: "Marketing Videos",
		count: 3,
	},
	{
		name: "AI Generated Videos",
		count: 2,
	},
	{
		name: "Pending Videos",
		count: 2,
	},
];

const getCategory = async () => {
	/* Your server/api logic can go here in this code. It works well with Fetch and Axios*/
	await delay(3000);

	return categoryList;
};

export const useCategoryData = () => useQuery<CategoryData[], Error>(["collaborators"], () => getCategory());
