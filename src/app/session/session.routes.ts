import type { Routes } from "@angular/router";

export default [
	{
		path: "",
		loadComponent: () => import("./ui/layout/layout.component"),
		children: [
			{
				path: "login",
				loadComponent: () => import("./components/login/login.component"),
			},
			{
				path: "register",
				loadComponent: () => import("./components/register/register.component"),
			},
		],
	},
] as Routes;
