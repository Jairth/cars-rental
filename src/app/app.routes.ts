import type { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "session",
		loadChildren: () => import("./session/session.routes"),
	},
	{
		path: "home",
		loadComponent: () => import("./home/ui/home.component"),
	},
	{
		path: "list-offers",
		loadComponent: () => import("./list-cars/ui/list-cars-page.component"),
	},
	{
		path: "**",
		redirectTo: "/home",
	},
];
