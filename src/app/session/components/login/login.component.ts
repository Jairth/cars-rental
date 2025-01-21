import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-login",
	imports: [RouterLink],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
	host: {
		class: "wrapper",
	},
})
export default class LoginComponent {}
