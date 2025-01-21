import type { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "session",
		loadChildren: () => import("./session/session.routes"),
	},
	{
		path: "",
		loadChildren: () => import("./UI/layout.routes"),
	},
	{
		path: "**",
		redirectTo: "",
	},
];
