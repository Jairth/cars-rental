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
				loadComponent: () => import("../list-cars/ui/list-cars-page.component"),
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
				path: "**",
				redirectTo: "/home",
			},
		],
	},
] as Routes;
