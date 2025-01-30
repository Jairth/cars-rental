import type { Routes } from "@angular/router";

export default [
	{
		path: "",
		loadComponent: () => import("./layout-general/layout-general.component"),
		children: [
			{
				path: "home",
				loadComponent: () => import("../home/ui/home.component"),
			},
			{
				path: "list-offers",
				loadChildren: () => import("../list-cars/list-cars.routes"),
			},
			{
				path: "checkout-offers",
				loadComponent: () => import("../checkout/ui/checkout-page.component"),
			},
			{
				path: "payment",
				loadComponent: () => import("../payment/ui/payment-page.component"),
			},
			{
				path: "contact",
				loadComponent: () =>
					import("../contact/ui/contact-page/contact-page.component"),
			},
			{
				path: "profile",
				loadComponent: () => import("../profile/ui/layout/layout.component"),
			},
			{
				path: "**",
				redirectTo: "home",
			},
		],
	},
] as Routes;
