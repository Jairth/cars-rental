import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { MenuComponent } from "../menu/menu.component";

@Component({
	selector: "app-header",
	imports: [RouterLink, MenuComponent],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.css",
	host: {
		class: "wrapper",
	},
})
export class HeaderComponent {

	private router = inject(Router)

	public authToken = localStorage.getItem("sb-ycmtrsipzymqgigyfhnu-auth-token");
	public typeClient = this.authToken ? JSON.parse(this.authToken).user.user_metadata.role : null;

	logOut() {
		localStorage.removeItem("sb-ycmtrsipzymqgigyfhnu-auth-token");
		this.router.navigate(["/session/login"]);
	}
}
