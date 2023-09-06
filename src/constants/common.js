const { StyleSheet } = require("react-native");

const css = StyleSheet.create({
		items_baseLine: {
			alignItems: "baseline",
		},
		items_center: {
			alignItems: "center",
		},
		items_start: {
			alignItems: "flex-start",
		},
		items_end: {
			alignItems: "flex-end",
		},
		items_stretch: {
			alignItems: "stretch",
		},

		justify_center: {
			justifyContent: "center",
		},
		justify_start: {
			justifyContent: "flex-start",
		},
		justify_end: {
			justifyContent: "flex-end",
		},
		justify_around: {
			justifyContent: "space-around",
		},
		justify_between: {
			justifyContent: "space-between",
		},
		justify_evenly: {
			justifyContent: "space-evenly",
		},

		flex_1: {
			flex: 1,
		},
		shrink_0: {
			flexShrink: 0,
		},
		shrink_1: {
			flexShrink: 1,
		},
		grow_0: {
			flexGrow: 0,
		},
		grow_1: {
			flexGrow: 1,
		},
		flex_wrap: {
			flexWrap: 'wrap',
		},
		row: {
			flexDirection: "row",
		},
		column: {
			flexDirection: "column",
		},

		place_center: {
			justifyContent:'center', alignItems: 'center',
		}
	});

module.exports = {
	items_baseLine: css.items_baseLine,
	items_center: css.items_center,
	items_start: css.items_start,
	items_end: css.items_end,
	items_stretch: css.items_stretch,
	justify_center: css.justify_center,
	justify_start: css.justify_start,
	justify_end: css.justify_end,
	justify_around: css.justify_around,
	justify_between: css.justify_between,
	justify_evenly: css.justify_evenly,
	flex_1: css.flex_1,
	shrink_0: css.shrink_0,
	shrink_1: css.shrink_1,
	grow_0: css.grow_0,
	grow_1: css.grow_1,
	row: css.row,
	column: css.column,
	place_center: css.place_center,
	flex_wrap: css.flex_wrap,
};
