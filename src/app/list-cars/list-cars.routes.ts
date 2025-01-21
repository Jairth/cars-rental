import type { Routes } from "@angular/router";

export default [
	{
		path: "",
		loadComponent: () => import("./ui/layout/layout.component"),
		children: [
			{
				path: "",
				loadComponent: () =>
					import("./components/listCars/list-cars-page.component"),
			},
			{
				path: "car/:car",
				loadComponent: () =>
					import("./components/popup-car/popup-car.component"),
			},
		],
	},
] as Routes;
