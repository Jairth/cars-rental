import type { Routes } from "@angular/router";

export default [
	{
		path: "list-offers",
		loadComponent: () => import("./ui/layout/layout.component"),
		children: [
			{
				path: "",
				loadComponent: () =>
					import("./components/listCars/list-cars-page.component"),
			},
			{
				path: "popup/:car",
				loadComponent: () =>
					import("./components/popup-car/popup-car.component"),
			},
		],
	},
] as Routes;
